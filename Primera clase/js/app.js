var nombre = prompt("Cual es tu nombre?")
console.log(nombre)
alert("Hola " + nombre)
if(nombre === null)
{
    console.error("Ingrese su nombre por favor, hubo un error")
}

document.querySelector(".contenido").innerHTML =
    `Tu nombre es ${nombre} y estás aprendiendo algo nuevo 📌`