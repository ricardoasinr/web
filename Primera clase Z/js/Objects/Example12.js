//Object constructor
const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,
    mostrarNota: function () {
        console.log(`El estudiante ${this.nombre} tiene una nota de: ${this.nota}`)
    }

}

function estudiante1(nombre , nota){
    this.nombre = nombre;
    this.nota = nota;
    this.aprobado = true;

}

const est = new estudiante1('Pablo Asin', '90')
const est1 = new estudiante1('Maria Asin', '98')

console.log(est)
console.log(est1)

















