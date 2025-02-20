let lista = []; 
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let codigo = document.getElementById('codigo').value;
    let descripcion = document.getElementById('descripcion').value;
    let existe = lista.some(lista => lista.codigo === codigo);
    
    if (existe) {
        mostrarMensaje('Error: Código repetido', 'error');
    } else {
        lista.push({ 
            codigo, 
            nombre, 
            descripcion, 
            precio, 
            cantidad 
        });
        mostrarMensaje('✅ Producto agregado correctamente', 'exito');
        e.target.reset();
        console.log('Lista actual:', lista);
    }
});

function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`; 
    mensaje.style.display = 'block';
    
    setTimeout(() => {
        mensaje.style.display = 'none';
        mensaje.className = 'mensaje'; 
    }, 3000);
}