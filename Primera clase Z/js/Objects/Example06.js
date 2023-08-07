
//Esto es un objeto
//Un objeto agrupa todo en una sola variable
const Estudiante = {
    nombre: 's',
    nota: 100,
    aprobado: true,
    lista: [1,3,4],
    calificaciones: {
        parciales: {
            nota1: 100,
            nota2: 25,
        },
        promedio: 62.5,
    },


}
//Destructuring con objetos anidados
// const {calificaciones} = Estudiante
// console.log(calificaciones.parciales)

const {nombre, calificaciones, calificaciones:{parciales}} = Estudiante
console.log(calificaciones)

// const { calificaciones:{ parciales:{nota1}}} = Estudiante
// console.log(nota1)









