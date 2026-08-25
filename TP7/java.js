let Boton = document.querySelector('#Edad')
let edad = 15
let Parrafo = document.querySelector('#Parrafo')
let NombreUsuario = 'Nahuel'
let nombreUsuario = 'Marcos'
let Boton2 = document.querySelector('#Nombre')



Boton.onclick = function () {
    if (edad >= 18) {
        Parrafo.textContent = 'ingreso aceptado'
    } else {
        Parrafo.textContent = 'ingreso rechazado'
    }
}

Boton2.onclick = function (){
    if (NombreUsuario == 'Nahuel') {
        Parrafo.textContent = "Bienvenido Nahuel, ¿cómo estás?"
    } else {
        Parrafo.textContent = "Bienvenido usuario"
        
    }
}

Boton2.onclick = function (){
    if (NombreUsuario == 'Marcos') {
        Parrafo.textContent = "Bienvenido Marcos, ¿cómo estás?"
    } else {
        Parrafo.textContent = "Bienvenido" 
        
    }
}
