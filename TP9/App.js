let num1 = Number(document.querySelector('#Numero1'));
let num2 = Number(document.querySelector('#Numero2'));
let resultado = document.querySelector('#Final')
let boton = document.querySelector('#boton1')

function mayor(num1, num2) {  
let mensaje
    if (num1 > num2) {
        mensaje = 'El numero'+num1+' es mayor';
    } else {
        mensaje = 'El numero'+num2+' es mayor';
    }
    return mensaje
}

boton.onclick = function() {
    resultado.textContent = mayor (num1, num2)
}