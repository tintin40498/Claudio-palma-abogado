document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('casos-container');
    if (!contenedor) return;
    
    const casos = JSON.parse(localStorage.getItem('casos') || '[]');
    
    if (casos.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; padding:40px;">Próximamente compartiremos nuestros casos de éxito.</p>';
        return;
    }
    
    contenedor.innerHTML = '';
    casos.forEach(c => {
        contenedor.innerHTML += `
            <div style="background:white; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                ${c.foto ? `<img src="${c.foto}" style="width:100%; height:200px; object-fit:cover;">` : ''}
                <div style="padding:15px;">
                    <span style="background:#fbbf24; color:#0a1a2f; padding:3px 8px; border-radius:5px; font-size:0.8rem;">${c.area}</span>
                    <h3 style="margin:10px 0;">${c.titulo}</h3>
                    <p>${c.descripcion}</p>
                    <p style="color:#0a1a2f; font-weight:bold; margin-top:10px;">✅ ${c.resultado}</p>
                    <p style="color:#999; font-size:0.7rem;">${c.fecha}</p>
                </div>
            </div>
        `;
    });
});
