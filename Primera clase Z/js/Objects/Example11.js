//This y cómo se emplea

const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,
    mostrarNota: function () {
        console.log(`El estudiante ${this.nombre} tiene una nota de: ${this.nota}`)
    }

}

const estudiante1 = {
    nombre: 'Pablo Asin',
    nota: 78,
    aprobado: true,
    mostrarNota: function () {
        console.log(`El estudiante ${this.nombre} tiene una nota de: ${this.nota}`)
    }

}
console.log(estudiante.mostrarNota())
console.log(estudiante1.mostrarNota())
















