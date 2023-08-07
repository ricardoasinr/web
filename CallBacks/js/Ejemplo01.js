const paises = ["Bolivia", "Barbados", "Peru", "Argentina", "Uruguay", "Chile", "Brazil"]
//mostrarPaises()
nuevoPais("Colombia", mostrarPaises)

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })

    },3000)
}

function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais)
    }, 2000)
    callback()
}