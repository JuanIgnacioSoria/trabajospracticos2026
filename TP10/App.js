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
console.log('Pokémon Rojo')
videojuegos.shift('')
console.log('Pac Man')
console.log(videojuegos)
console.log(videojuegos.length)

//Ejercicio5

let Estudiantes = ["Martina", "Lucas", "Sofía", "Tomás","Valentina" ];

console.log(Estudiantes)
console.log(Estudiantes.length)
Estudiantes.push('Agustin')
Estudiantes.push('Camila')
console.log(Estudiantes)
Estudiantes.unshift('Bruno')
console.log(Estudiantes)
console.log(Estudiantes.length)
console.log(Estudiantes.indexOf("Sofía"))
console.log(Estudiantes.indexOf("Camila"))
console.log(Estudiantes.indexOf("Federico"))
Estudiantes.shift('')
console.log('Bruno')
Estudiantes.pop('')
console.log('Camila')
console.log(Estudiantes)
console.log(Estudiantes.length)

//Ejercicio6

let Tareas = ["Estudiar", "Hacer la tarea", "Ordenar la habitación", "Comprar alimentos" ];

console.log(Tareas)
console.log(Tareas.length)
Tareas.push("Pasear al perro")
Tareas.push("Preparar la cena")
console.log(Tareas)
Tareas.unshift("Entregar un trabajo")
console.log(Tareas)
console.log(Tareas.indexOf("Estudiar"))
console.log(Tareas.indexOf("Preparar la cena"))
console.log(Tareas.indexOf("Lavar el auto"))
Tareas.shift('')
console.log('Entregar un trabajo')
Tareas.pop('')
console.log('Preparar la cena')
Tareas.push("Leer un libro")
Tareas.unshift("Hacer ejercicio")
console.log(Tareas)
console.log(Tareas.length)

//Ejercicio7

let Peliculas = ["Toy Story", "Shrek", "Buscando a Nemo", "Los Increíbles", "Ratatouille" ];
let Variedad

console.log(Peliculas)
console.log(Peliculas.indexOf("Frozen"))
Peliculas.push('Cars')
Peliculas.push('Monsters Inc')
console.log(Peliculas)
Peliculas.unshift("Intensamente")
Peliculas.unshift("Coco")
console.log(Peliculas)
console.log(Peliculas.indexOf("Shrek"))
console.log(Peliculas.indexOf("Coco"))
console.log(Peliculas.indexOf("Frozen"))
Variedad = Peliculas.indexOf("Cars")

if (Variedad >= 0) {
    console.log("Cars esta en la lista")
} else {
    console.log("Cars no esta en la lista")
}

Peliculas.pop('')
console.log('Monster Inc')
Peliculas.shift('')
console.log('Coco')
Peliculas.push('Up')
console.log(Peliculas.indexOf("Up"))
console.log(Peliculas)
console.log(Peliculas.length)

//Ejercicio8

let ProductosTienda = ["Celular", "Notebook", "Tablet", "Teclado", "Mouse" ];

console.log(ProductosTienda)
console.log(ProductosTienda.length)
ProductosTienda.push('Monitor')
ProductosTienda.push("Impresora")
ProductosTienda.unshift("Cámara web")
ProductosTienda.unshift("Micrófono")
console.log(ProductosTienda)
console.log(ProductosTienda.length)
console.log(ProductosTienda.indexOf("Notebook"))
console.log(ProductosTienda.indexOf("Micrófono"))
console.log(ProductosTienda.indexOf("Parlantes"))
ProductosTienda.pop('')
console.log('Impresora')
ProductosTienda.shift('')
console.log('Micrófono')
console.log(ProductosTienda)
ProductosTienda.push("Parlantes")
ProductosTienda.unshift("Auriculares")
console.log(ProductosTienda)
console.log(ProductosTienda.indexOf("Parlantes"))
console.log(ProductosTienda.indexOf("Auriculares"))
console.log(ProductosTienda.indexOf("Celular"))
ProductosTienda.pop('')
console.log('Parlantes')
ProductosTienda.shift('')
console.log('Auriculares')
console.log(ProductosTienda)
console.log(ProductosTienda.length)