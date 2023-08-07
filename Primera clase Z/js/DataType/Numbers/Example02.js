let resultado;

resultado = Math.round(28.50) //Redondea para arriba
console.log(resultado)
console.log(Math.PI)
//Output: 29 3.141592653589793

resultado = Math.ceil(22.3)
console.log(resultado)
//Sin importar el decimal redondea hacia arriba
//Output: 23

resultado = Math.floor(22.999)
console.log(resultado)
//Sin importar el decimal redondea hacia abajo
//Output: 22

resultado = Math.sqrt(141).toFixed(2)
console.log(resultado)
//ToFixed solo muestra los decimales que deseemos sin redondear
//Output: Raiz(141)

resultado = Math.abs(-45)
console.log(resultado)
//Output: 45

resultado = Math.pow(2,3)
console.log(resultado)
//Output: 8

resultado = Math.min(2,3,1,0)
console.log(resultado)
//Output: 0

resultado = Math.max(2,3,1,0)
console.log(resultado)
//Output: 3

resultado = Math.floor(Math.random()*30)
console.log(resultado)
//Número random menor a 30
//Output: >30




