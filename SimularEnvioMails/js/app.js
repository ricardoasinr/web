
document.addEventListener('DOMContentLoaded', function() {

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMessage = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const buttonReset = document.querySelector('#formulario button[type="reset"]');
    const buttonEnviar = document.querySelector('#formulario button[type="submit"]');
    const spinner = document.querySelector("#spinner");
    const statusMessage = document.querySelector('#status-message')


    const regexEmail = /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMessage.addEventListener('blur', validar)
    formulario.addEventListener('submit', enviarEmail)

    buttonReset.addEventListener('click', function (e){
        e.preventDefault();

        resetAllForm()

    })

    function enviarEmail (event) {
        event.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');


        setTimeout(function () {
            resetAllForm()
            mensajeEnviado()
        }, 3000)



    }

    function resetAllForm (){
        spinner.classList.add('hidden')

        buttonEnviar.disabled = true;
        buttonEnviar.classList.add ('opacity-50');
        inputEmail.value = ''
        inputAsunto.value =''
        inputMessage.value = ''
        formulario.reset()
    }

    function mensajeEnviado(){

        //Hacer la otra manera con document.createElement('P')

        statusMessage.classList.add('bg-green-500', 'text-white', 'p-1', 'text-center')
        statusMessage.classList.remove('hidden')
        statusMessage.innerHTML = 'Mensaje enviado correctamente';
        setTimeout(function () {
            statusMessage.classList.add('hidden')
        }, 3000)


    }


     function validar (e) {

         if(e.target.value === ''){

             mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)

         }
         else {
             limpiarAlerta(e.target.parentElement)
             console.log(e.target.value)
             if(e.target.id === 'email'){
                validarEmail(e.target.value, e.target.parentElement)
                 validarEmailSinReferencia(e.target.value)
             }

         }

        enableButton(inputEmail.value, inputAsunto.value, inputMessage.value);

    }

    function mostrarAlerta (mensaje, referencia) {
        //Genera un alerta en el HTML
        limpiarAlerta(referencia)
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-1', 'text-center')

        referencia.appendChild(error)

    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600')

        if(alerta){
            alerta.remove()
        }
    }

    function validarEmail (email, referencia) {
        if(regexEmail.test(email)===true)
        {
            limpiarAlerta(referencia)
            console.log(`Email válido: ${regexEmail.test(email)}`)
            return true;
        }
        else{
            console.log(`Email válido: ${regexEmail.test(email)}`)
            limpiarAlerta(referencia)
            mostrarAlerta(`Ingrese un correo válido`, referencia)
            return false;
        }







    }
    function validarEmailSinReferencia (email ) {
        console.log(`EMAIL VALIDO: ${regexEmail.test(email)}`)
        return regexEmail.test(email)
    }

    function enableButton(inputEmail, inputAsunto, inputMessage) {


        if ( validarEmailSinReferencia(inputEmail) === true  && inputEmail !== '' && inputAsunto !== '' && inputMessage !== '' ) {
            buttonEnviar.disabled = false;
            buttonEnviar.classList.remove('opacity-50');

        } else {
            buttonEnviar.disabled = true;
            buttonEnviar.classList.add ('opacity-50');

        }
    }

    // function comprobarEmailObj(){
    // console.log(Object.values(emailObj))
    //     console.log(Object.keys(emailObj))
    //     console.log(Object.values(emailObj))
    //
    //     console.log(Object.values(emailObj).includes(''))
    // }

    // function comprobarEmailobj(){
    //     if(emailObj.values(emailObj).includes('')){
    //         button.classList.remove('opacity-50');
    //     }
    //     else{
    //         button.disable = false
    //     }
    // }

})