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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].id)
}

for (let i = 0; i <carrito.length; i++) {
    console.log(carrito[i].nombre)
}

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].precio)
}
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].id)
}


console.log("----------Con ForEach----------")
carrito.forEach(productos => {

    console.log(`${productos.categoría} -> ${productos.nombre}`)
})