//Sellar un objeto
"use strict"
const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,

}
//Solo puedo cambiar los 'valores' de las propiedades del objeto
//No se puede agregar propiedades
Object.seal(estudiante);
estudiante.aprobado = false
console.log(estudiante)
console.log(`Is Seal: ${Object.isSealed(estudiante)}`)











