function mayor() {
    let num1 = Number(document.querySelector('Numero1').value);
    let num2 = Number(document.querySelector('Numero2').value);

    if (num1 > num2) {
        document.querySelector('#Final').textContent = 'El numero'+num1+' es mayor';
    } else {
        document.querySelector('#Final').textContent = 'El numero'+num2+' es mayor';
    }
}