
//Esto es un objeto
//Un objeto agrupa todo en una sola variable
const Estudiante = {
    nombre: 's',
    nota: 100,
    aprobado: true,
    lista: [1,3,4],

        parciales: {
            nota1: 100,
            nota2: 25,
        },



}
//Destructuring
const {parciales} = Estudiante
console.log(parciales.nota1)

console.log(Estudiante.parciales.nota1)






