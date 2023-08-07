//Variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const listaGastos = document.querySelector('#gastos ul')
const presupuestoTotal = document.querySelector('#total ')
const restanteTotal = document.querySelector('#restante ')
const nombreGastoDigitado = document.querySelector('#gasto')
const cantidadGastoDigitada = document.querySelector('#cantidad')
const alerta = document.querySelector('#alerta')



eventListener()

//Eventos

function eventListener (){
    formulario.addEventListener('submit', agregarGasto)
    document.addEventListener('DOMContentLoaded', solicitarPresupuesto)


    // document.addEventListener('DOMContentLoaded', ()=>{
    //     //Cargar datos con el storage
    //
    //         presupuesto.gastos = JSON.parse(localStorage.getItem('gastos'))
    //         presupuesto.presupuesto = JSON.parse(localStorage.getItem('presupuesto'))
    //         presupuesto.restante = JSON.parse(localStorage.getItem('restante'))
    //         crearListaGastos()
    //
    //         console.log(`Esto viene del Local Storage${presupuesto.gastos}`)
    //
    //
    // })
}




//Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }


}

class UI {
    insertarPresupuesto(monto){

        const {presupuesto, restante} = monto;
        presupuestoTotal.textContent = presupuesto
        restanteTotal.textContent = restante

    }

    restarPresupuesto(monto){
        const {prespuesto, restante} = monto;
        presupuesto.restante = presupuesto.restante - cantidadGastoDigitada.value

        restanteTotal.textContent = presupuesto.restante
    }

    imprimirAlerta(mensaje, tipo){
        //const resultado = document.createElement('div');
        //resultado.textContent = mensaje;
        alerta.classList.add('text-center', 'alert');

        if(tipo === "error")
        {

                alerta.classList.remove('hidden');
                alerta.classList.add('alert-danger');
                alerta.textContent = mensaje ;

            setTimeout(function(){
            alerta.classList.add('hidden');
            alerta.classList.remove('alert-danger');
            alerta.textContent = '' ;
            //alerta.remove()
            }, 3000);

        }
        else{

            alerta.classList.remove('hidden');
            alerta.classList.add('alert-success');
            alerta.textContent = mensaje ;
            setTimeout(function(){
                alerta.classList.add('hidden');
                alerta.classList.remove('alert-success');
                alerta.textContent = '' ;
                //alerta.remove()
            }, 3000)




        }








    }






}

const ui = new UI ();

let presupuesto;






//Funciones

function solicitarPresupuesto () {
    const  presupuestoUsuario = prompt("Cual es su presupuesto?")
    console.log(presupuestoUsuario)

    if(presupuestoUsuario === '' || isNaN(Number(presupuestoUsuario))  || presupuestoUsuario <= 0)
    {
       // console.log(presupuestoUsuario)
        console.log("Presupuesto inválido")
        window.location.reload()

    }
     presupuesto = new Presupuesto(presupuestoUsuario);
     console.log(presupuesto)
    ui.insertarPresupuesto(presupuesto)

}

function verificarCantidadIntroducida(nombreIntroducido, gastoIntroducido) {

    if( nombreIntroducido == "" || gastoIntroducido == ""){
        console.log("Ambos son requeridos")
        ui.imprimirAlerta("Los campos deben estar llenos", 'error')
        return false;
    }else if (gastoIntroducido <= 0 || isNaN(Number(gastoIntroducido))){
        ui.imprimirAlerta("Error al introducir gasto", 'error')

        return false;


    }
    else if(gastoIntroducido > presupuesto.restante ){
        ui.imprimirAlerta("Excede el presupuesto restante", 'error')
        return false;

    }
    else {
        ui.imprimirAlerta("Ok", 'ok')
        return true
    }


}

function agregarGasto(e){
    e.preventDefault()
    console.log("Presupuesto restante: " + presupuesto.restante)
    console.log(verificarCantidadIntroducida(nombreGastoDigitado.value, cantidadGastoDigitada.value))
    if(verificarCantidadIntroducida(nombreGastoDigitado.value, cantidadGastoDigitada.value)){
        console.log(nombreGastoDigitado.value + ": " + cantidadGastoDigitada.value + "$ Correcto")
        ui.restarPresupuesto(cantidadGastoDigitada.value)


        const gasto = {
            nombre: '',
            monto: '',
        }
        gasto.nombre = nombreGastoDigitado.value
        gasto.monto = cantidadGastoDigitada.value

        presupuesto.gastos = [...presupuesto.gastos, gasto]
        console.log(presupuesto.gastos)
        sincronizarLocalStorage()

        crearListaGastos ()
    }
    else{
        console.log(nombreGastoDigitado.value + ": " + cantidadGastoDigitada.value + "$ Incorrecto")
    }








}

function crearListaGastos (){
    limpiar()
    if(presupuesto.gastos.length > 0){
        presupuesto.gastos.forEach(gasto => {
            const li = document.createElement('li')
            li.innerText = `Nombre: ${gasto.nombre}  ${gasto.monto}Bs.-`
            listaGastos.appendChild(li)

        } )
    }




}

function limpiar(){
    while(listaGastos.firstChild){
        listaGastos.removeChild(listaGastos.firstChild)
    }
}

function sincronizarLocalStorage(){
    localStorage.setItem('gastos', JSON.stringify(presupuesto.gastos))
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto.presupuesto))
    localStorage.setItem('restante', JSON.stringify(presupuesto.restante))
}

