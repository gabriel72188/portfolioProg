(function() {
    emailjs.init("8-O8nP7hD09GGj7OZ"); // Reemplaza con tu user_id de EmailJS
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