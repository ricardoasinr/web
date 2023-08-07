function suma(a, b){
    return a+b
}

const resultado = suma(4,8)
console.log(resultado)

let total = 0
function agregarCarrito(precio){

    return total += precio

}

total = agregarCarrito(150)
total = agregarCarrito(150)
console.log(total)

function calcularIva(total){
    return total*1.13
}
console.log(`Total a pagar es: ${parseFloat(calcularIva(total))}`)
