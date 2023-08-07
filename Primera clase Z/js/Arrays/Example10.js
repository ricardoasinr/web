//ForEach para iterar un array
const carrito = [
    {
        id: 1,
        categoría: 'Smartphones/Tablets',
        nombre: 'Tablet',
        precio: 1200
    },
    {
        id: 2,
        categoría: 'Smartphones/Tablets',
        nombre: 'Celular',
        precio: 1800
    },
    {
        id: 3,
        categoría: 'Laptops',
        nombre: 'Laptop Lenovo',
        precio: 3500
    },
    {
        id: 4,
        categoría: 'Accesorios',
        nombre: 'Teclado',
        precio: 120
    }
]

console.log(carrito)

// const arregloEach = carrito.forEach(productos => {
//
//     console.log(`${productos.categoría} -> ${productos.nombre}`)
// })

const arregloMap = carrito.map(productos => {

    return `${productos.categoría} -> ${productos.nombre}`
})

//console.log(arregloEach)
console.log("Map")
console.log(arregloMap)