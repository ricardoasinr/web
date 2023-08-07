//Carrito
const carrito = []

const producto = {
    id: 1,
    categoría: 'Tecnología',
    nombre: 'Tablet',
    precio: 1200
}

const producto2 = {
    id: 2,
    categoría: 'Tecnología',
    nombre: 'Celular',
    precio: 1800
}

const producto3 = {
    id: 3,
    categoría: 'Tecnología',
    nombre: 'Laptop',
    precio: 3500
}

const producto4 = {
    id: 4,
    categoría: 'Tecnología',
    nombre: 'Teclado',
    precio: 120
}

//let resultado = [producto2, ...carrito, producto, producto3]

let resultado = [...carrito, producto]
// let res = [...carrito, producto]
// let res2 = [...carrito, producto, producto2]
let res3 = [producto3,...resultado]


console.log(carrito)
