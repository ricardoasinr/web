//La variable const no debe tener ningún tipo de dato numérico
const producto = 'Cuaderno en el segundo ejemplo';
console.log(producto);
console.log(producto.length);

// Nos ofrecerá el primer índice en el que se puede encontrar un elemento
// dado en el array, o en su defecto retornará el valor -1
// si el elemento no está presente.
//
// Sintaxis
//         cadena.indexOf(valorBusqueda[, indiceDesde])

let buscandoIndexOf = producto.indexOf('en');
console.log('Posición de la búsqueda con IndexOf: '+buscandoIndexOf);

const bucandoInclude = producto.includes('en');
console.log("Resultado de la búsqueda con include: "+ bucandoInclude);

//Output: True o false




