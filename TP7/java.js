let Boton = document.querySelector('Edad')
let edad = 15
let Parrafo


Boton.onclick = function () {
    if (edad >= 18) {
        Parrafo.textcontent = 'ingreso aceptado'
    } else {
        Parrafo.textContent = 'ingreso rechazado'
    }
}

