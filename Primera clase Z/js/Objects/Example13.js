//Objects keys, values, entries
const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,
    mostrarNota: function () {
        console.log(`El estudiante ${this.nombre} tiene una nota de: ${this.nota}`)
    }

}

console.log(Object.keys(estudiante))
//Output: ['nombre', 'nota', 'aprobado', 'mostrarNota']

console.log(Object.values(estudiante))
//Output: ['Ricardo Asin', 100, true, ƒ]

console.log(Object.entries(estudiante))
//Output



















