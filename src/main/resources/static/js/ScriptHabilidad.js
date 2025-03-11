// Volver arriba pero de manera fluida
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
        // preventDefault hace que la página no se recargue al momento
        event.preventDefault();
        link.style.color = '#6F5F6F';

        // Agregar el efecto de desvanecimiento antes de redirigir
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = 0;

        // Esto crea un delay de 300 ms antes de ir a la página
        setTimeout(() => {
            window.location.href = link.href;
        }, 300); // Ajustar el tiempo para que coincida con la transición
    });
});
// Funciones para agrandar y restaurar imágenes
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las imágenes
    const images = document.querySelectorAll('#aprendidas img, #en-aprendizaje img, footer img');

    // Función para agrandar las imágenes
    function agrandarImagen(event) {
        event.target.style.transition = 'transform 0.3s ease';
        event.target.style.transform = 'scale(1.2)';
    }

    // Función para restaurar la imagen
    function restaurarImagen(event) {
        event.target.style.transition = 'transform 0.3s ease';
        event.target.style.transform = 'scale(1)';
    }

    // Con mouseover se agranda y con mouseout vuelve al tamaño original
    images.forEach(image => {
        image.addEventListener('mouseover', agrandarImagen);
        image.addEventListener('mouseout', restaurarImagen);
    });
});

// Efecto de desvanecimiento al salir de la página (antes de navegar)
window.addEventListener('beforeunload', () => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = 0;
});