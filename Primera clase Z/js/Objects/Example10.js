//Copiar o unir un objeto

const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,

}

const parciales = {
    parcial1: 100,
    parcial2: 98,
}

const resultado = Object.assign(estudiante, parciales)

console.log(resultado)

const resultado1 = {
    ... estudiante,  ... parciales
}

console.log(resultado1)












