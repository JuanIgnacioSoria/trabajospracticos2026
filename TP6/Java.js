let parrafo = document.querySelector("#P");
let Fondo = document.querySelector("#fondos");
let Texto = document.querySelector("#Texto");
let Color = document.querySelector("#color");
let Letra = document.querySelector("#letra");
let Tamano = document.querySelector("#Tamano");
let Reiniciar = document.querySelector('#reinicio')


Fondo.onclick = function () {
    parrafo.style.backgroundColor = "Green";
};

Texto.onclick = function () {
    parrafo.textContent = "Hola profe";
};

Color.onclick = function () {
    parrafo.style.color = "red";
};

Letra.onclick = function () {
    parrafo.style.fontFamily = "Impact";
};

Tamaño.onclick = function () {
    parrafo.style.fontSize = "30px";
};


