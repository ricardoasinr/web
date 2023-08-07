//La variable const no debe tener ningún tipo de dato numérico
const producto = 'Cuaderno';
const precio = '5 USD'


console.log(producto + ' Costo: ' + precio);

//Concatenando de manera diferente
//Este sí se puede usar en el HTML
console.log(producto.concat(` Costo: ${precio}`));
console.log(producto.concat(` en descuento`));
console.log(`El producto '${producto}' tiene un precio de ${precio}`)



