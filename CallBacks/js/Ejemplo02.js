const paises = []

function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais)
        console.log(`Agregando país: ${pais}`)
    }, 2000)
    callback()
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallBacks(){
    setTimeout(() =>{
        nuevoPais("Colombia",mostrarPaises)
        setTimeout(() =>{
            nuevoPais("Bolivia",mostrarPaises)
            setTimeout(() =>{
                nuevoPais("Uruguay",mostrarPaises)
                setTimeout(() =>{
                    mostrarPaises()
                },2000)
            },2000)

        },2000)

    },2000)
}

iniciarCallBacks()
