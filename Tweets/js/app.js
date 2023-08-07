//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweet = document.querySelector('#tweet')
const contenido = document.querySelector('#contenido')
let tweets = []




eventListener()

//Eventos listeners
function eventListener(){
    formulario.addEventListener('submit', agregarTweet)

    // document.addEventListener('DOMContentLoaded', ()=>{
    //     //Cargar datos con el storage
    //     tweets = JSON.parse(localStorage.getItem('tweets'))
    //     console.log(`Esto viene del Local Storage${tweets}`)
    //
    //     crearListaTweets()
    // })

}



//Funciones

function agregarTweet (e){
    e.preventDefault();
    if(tweet.value === ''){
        console.log('Tweet vacío')
        mostrarError('Tweet vacío')
        return
    }
    else {
        console.log(`Contenido del Tweet: ${tweet.value}`)
        const tweetObj = {
            id: '',
            tweet: '',
        }

        tweetObj.id = Date.now()
        tweetObj.tweet = tweet.value
        tweets = [...tweets, tweetObj]
        console.log(tweets)
        sincronizarLocalStorage()


       crearListaTweets();


    }


}

function sincronizarLocalStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}



function crearListaTweets (){
    limpiar()
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            const li = document.createElement('li')
            li.innerText = `ID: ${tweet.id} - ${tweet.tweet}`
            listaTweets.appendChild(li)

        } )
    }




}

function limpiar(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}
function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.classList.add('error')
    mensajeError.textContent = error
    contenido.appendChild(mensajeError)
    setTimeout(function(){
        mensajeError.remove()
    }, 3000)





}