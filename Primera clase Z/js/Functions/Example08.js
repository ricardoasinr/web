const letras = ['A', 'B', 'C','D', 'E', 'F']

letras.forEach((letra, indice)=>{
    console.log(`indice: ${indice} -> ${letra}`)
})

for (let letra of letras){
    console.log(letra)
}