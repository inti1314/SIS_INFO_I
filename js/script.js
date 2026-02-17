console.log("Inti Hermosa");

let boton = document.getElementById("btnSaludar");

boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Por favor ingresa tu nombre:");
    } else {
        alert("Hola " + nombre + ", bienvenido a la página");
    }

});

