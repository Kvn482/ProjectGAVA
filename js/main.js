let alerta = document.getElementById("alerta");
var enlaces = document.querySelectorAll("#enlace");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function(event) {
        event.preventDefault();

        var texto = this.textContent;
        navigator.clipboard.writeText(texto)
            .then(function() {
                alerta.id = "showalerta";
                setTimeout(function() {
                    alerta.id = "alerta";
                }, 1000);
            })
            .catch(function(error) {
                console.error("Error al copiar texto: ", error);
            });
    });
});
