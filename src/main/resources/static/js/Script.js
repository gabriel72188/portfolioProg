// Manejar la navegación en pantallas pequeñas
function handleSmallScreens() {
    document.querySelector('.navbar-toggler')
        .addEventListener('click', () => {
            let navbarMenu = document.querySelector('.navbar-menu');

            if (!navbarMenu.classList.contains('active')) {
                navbarMenu.classList.add('active');
            } else {
                navbarMenu.classList.remove('active');
            }
        });
}

handleSmallScreens();

(function() {
    emailjs.init("8-O8nP7hD09GGj7OZ");
})();

// Manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_fo5pvic', 'template_tugkpir', this)
            .then(function() {
                alert('Mensaje enviado!');
            }, function(error) {
                alert('Error al enviar el mensaje: ' + JSON.stringify(error));
            });
    });
});