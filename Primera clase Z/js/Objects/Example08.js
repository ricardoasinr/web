//Congelar objetos
"use strict"
const estudiante = {
    nombre: 'Ricardo Asin',
    nota: 100,
    aprobado: true,

}

Object.freeze(estudiante)
//Con esta opción impedimos que se puedan agregar o modificar propiedades al objeto
//estudiante.aprobado = false;
console.log(Object.isFrozen(estudiante))
console.log(estudiante);

//Output:
// Example08.js:12 Uncaught TypeError:
// Cannot assign to read only property 'aprobado' of object '#<Object>'








