// 1. Verificar el número mayor

function mayor(num1, num2) {
    if (num1 > num2) {
        return "El número mayor es: " + num1;
    } else if (num2 > num1) {
        return "El número mayor es: " + num2;
    } else {
        return "Los números son iguales";
    }
}

function ejecutarMayor() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);

    document.getElementById("resultado1").innerHTML = mayor(n1, n2);
}


// 2. Verificar el número menor

function menor(num1, num2) {
    if (num1 < num2) {
        return "El número menor es: " + num1;
    } else if (num2 < num1) {
        return "El número menor es: " + num2;
    } else {
        return "Los números son iguales";
    }
}

function ejecutarMenor() {
    let n1 = Number(document.getElementById("numero3").value);
    let n2 = Number(document.getElementById("numero4").value);

    document.getElementById("resultado2").innerHTML = menor(n1, n2);
}


// 3. Verificar si son iguales o diferentes

function iguales(num1, num2) {
    if (num1 == num2) {
        return "Los números son iguales";
    } else {
        return "Los números son diferentes";
    }
}

function ejecutarIguales() {
    let n1 = Number(document.getElementById("numero5").value);
    let n2 = Number(document.getElementById("numero6").value);

    document.getElementById("resultado3").innerHTML = iguales(n1, n2);
}


// 4. Calcular el IVA

function calcularIVA(compra) {
    let iva = compra * 0.21;
    return "El IVA es: $" + iva.toFixed(2);
}

function ejecutarIVA() {
    let valor = Number(document.getElementById("compra").value);

    document.getElementById("resultado4").innerHTML = calcularIVA(valor);
}


// 5. Saludar a una persona

function saludar(nombre) {
    return "¡Hola " + nombre + "! Bienvenido.";
}

function ejecutarSaludo() {
    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultado5").innerHTML = saludar(nombre);
}


// 6. Activar modo oscuro

function modoOscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}


// 7. Activar modo claro

function modoClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}