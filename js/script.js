console.log("Sitio cargado correctamente - Eventos Chiapas");
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Mensaje enviado con éxito!");
        });
    }
});