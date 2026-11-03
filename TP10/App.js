//Ejercicio1

let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];

console.log(utiles)
console.log(utiles[0])
console.log(utiles[2])
console.log(utiles[utiles.length-1])
console.log(utiles.length)
utiles.push('Mochila');
console.log(utiles)
utiles.unshift('Cartuchera');
console.log(utiles)
console.log(utiles.length)
console.log('Mochila')
utiles.pop();
console.log(utiles)
console.log('Cartuchera')
utiles.shift();
console.log(utiles)
console.log(utiles.length)

//Ejercicio2

let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

console.log(productos)
console.log(productos.length)
productos.push('Azucar')
productos.push('Yerba')
productos.push('Cafe')
console.log(productos)
productos.unshift('Sal')
productos.unshift('Galletitas')
console.log(productos)
console.log(productos.length)
productos.pop();
console.log('Cafe')
productos.pop();
console.log('Yerba')
console.log(productos)
productos.shift();
console.log('Galletitas')
console.log(productos)
console.log(productos.length)

//Ejercicio3

let Tecnologico = ["Teclado", "Mouse", "Monitor", "Auriculares", "Webcam", "Parlantes"];
let Variable
let Variado

console.log(Tecnologico.indexOf("Mouse"))
console.log(Tecnologico.indexOf("Monitor"))
console.log(Tecnologico.indexOf("Webcam"))
console.log(Tecnologico.indexOf("Impresora"))
Variable = Tecnologico.indexOf('Teclado')

if (Variable >= 0) {
    console.log('Teclado esta registrado')
} else {
    console.log('Teclado no esta registrado')
}

console.log(Tecnologico.indexOf("Impresora"))
Variado = Tecnologico.indexOf('Impresora')

if (Variado >= -1) {
    console.log('Impresora esta registrado')
} else {
    console.log('Impresora no esta registrado')
}

Tecnologico.push("Impresora")
console.log(Tecnologico.indexOf("Impresora"))
console.log(productos.length)

//Ejercicio4

let videojuegos = ["Minecraft", "Pokémon Cristal", "Super Mario", "The Legend of Zelda", "Sonic"];

console.log(videojuegos)
console.log(videojuegos.length)
videojuegos.push('Animal Crossing')
videojuegos.push('Pokémon Rojo')
console.log(videojuegos)
videojuegos.unshift('Tetris')
videojuegos.unshift('Pac Man')
console.log(videojuegos)
console.log(videojuegos.indexOf("Pokémon Cristal"))
console.log(videojuegos.indexOf("Sonic"))
console.log(videojuegos.indexOf("FIFA"))
videojuegos.pop();
console.log('')





























