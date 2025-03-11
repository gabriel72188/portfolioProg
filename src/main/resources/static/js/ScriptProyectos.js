//Volver arriba pero de manera fluida
const botonArriba = document.querySelector('footer a[href="#"]');
if (botonArriba) {
    botonArriba.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// FUNCIONES PARA EL NAV
const menuLinks = document.querySelectorAll('#menu ul li a');

// Agregar un evento a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.6s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });

    link.addEventListener('click', (event) => {
        // Agregar animación al hacer clic
        //preventDefault hace que la pagina no se recargue al momentop.
        event.preventDefault();
        link.style.color = '#6F5F6F';
        //Esto crea un delay de 300 ms antes de ir a la pagina.
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});

// JAVASCRIPT CARRUSEL
window.onload = function () {
    const imagenes = document.querySelectorAll('.imagen-carrusel');
    let indice = 0;

    // Muestra la primera imagen
    imagenes[indice].classList.add('activa');

    // Funcion para cambiar la imagen
    function cambiarImagen() {
        // Quita la clase "activa" de la imagen
        imagenes[indice].classList.remove('activa');
        
        
        //Suma 1 al indice y lo divide entre el numero de imagenes, y al dar 0, repite el buclie
        indice = (indice + 1) % imagenes.length;
        
        // Añade la clase activa a la siguiente imagen
        imagenes[indice].classList.add('activa');
    }

    // Cambiar imagen cada 3 segundos
    setInterval(cambiarImagen, 3000);
};
// Desaparece poco a poco la pagina al ir a otra
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 300);
});
// Efecto de desvanecimiento al salir de la página (antes de navegar)
window.addEventListener('beforeunload', () => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = 0;
});
