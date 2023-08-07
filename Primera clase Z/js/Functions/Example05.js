
initApp()
userAuthenticate("Ricardo Asin")
function initApp(){
    console.log("Inicializando la aplicación")
    secondFunction()
}

function secondFunction(){
    console.log("En la segunda función")
}

function userAuthenticate(usuario){
    console.log('Autenticando...')
    console.log(`Usuario autenticado exitosamente ${usuario}.`)
}