console.log("Introducción a objetos")
const nombre = 'Ana María Paz'
const nota = 100
const aprobado = true

//Esto es un objeto
//Un objeto agrupa todo en una sola variable
const Estudiante = {
    nombre: 's',
    nota: 100,
    aprobado: true,
    lista: [1,3,4]
}
console.log(Estudiante.nombre)
console.log(Estudiante.lista[1])

console.log(`Nombre del estudiante: ${Estudiante.nombre}`)
console.log(`Nombre del estudiante: ${Estudiante['nombre']}`)

//Agregando atributos o propiedades
Estudiante.foto = 'Foto.jpg'
//console.log(Estudiante)

//Output:
// {nombre: 's', nota: 100, aprobado: true, lista: Array(3), foto: 'Foto.jpg'}

//Eliminando atributos
delete Estudiante.foto
console.log(Estudiante)

//Output:
// {nombre: 's', nota: 100, aprobado: true, lista: Array(3)}

