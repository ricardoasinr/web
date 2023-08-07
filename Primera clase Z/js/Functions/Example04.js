function suma(a, b){
    console.log(a+b)
}
suma(4,7)


function saludo(nombre, apellido = "No tiene"){
    console.log(`Hola ${nombre}, tu apellido es ${apellido}`)
}
saludo("Pablo" )