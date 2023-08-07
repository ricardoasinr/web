
//Esto es un objeto
//Un objeto agrupa todo en una sola variable
const Estudiante = {
    nombre: 's',
    nota: 100,
    aprobado: true,
    lista: [1,3,4]
}
//Destructuring
const {nombre, lista} = Estudiante

console.log(nombre)
console.log(lista.at(2))





