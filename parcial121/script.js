
//50 + ((Altura-150) / 4) *3 + (Edad – 20) /4 * (0.9 si es mujer)


document.addEventListener('DOMContentLoaded', function() {
    const inputAltura = document.querySelector('#altura');
    const inputPeso = document.querySelector('#peso');
    const inputEdad = document.querySelector('#edad');
    const inputSexo = document.querySelector('#sexo');
    const result = document.querySelector('#resultado')

    const buttonCalcular = document.querySelector('#formulario button[type="submit"]');
    const buttonReset = document.querySelector('#formulario button[type="reset"]');

    const formulario = document.querySelector('#formulario');

    console.log(inputAltura.value)



    buttonReset.addEventListener('click', function (e){
        console.log('Se elimino todo')
        e.preventDefault();

        inputAltura.value = ''
        inputPeso.value =''
        inputEdad.value = ''
        inputSexo.value = ''
        result.innerHTML = `Se reseteó todo`;


        formulario.reset()
    })

    buttonCalcular.addEventListener('click', function (e){
        e.preventDefault();
        let altura = parseInt(inputAltura.value.toString())
        let edad = parseInt(inputEdad.value.toString())
        let sexo = inputSexo.value.toString
        calcular(inputAltura.value,inputEdad.value,inputSexo.value,altura, edad, sexo)

    })


    function calcular(inputAltura,inputEdad,inputSexo,altura, edad, sexo) {

        let peso = 0;


        //Primero verifica que todos los campos estén llenos
        if (inputAltura !== '' && inputEdad !== '' && inputSexo !== '') {
           console.log(altura, edad, sexo)
            //Verifica si es Mujer
            if(inputSexo === "M"){

                peso = (50 + (((altura-150) / 4) *3) + (edad-20 )/4) * (0.9)
                console.log(`El peso es: ${peso}`)
            }
            else {
                peso = 50 + (((altura-150) / 4) *3) + (edad-20 )/4
                console.log(`El peso es: ${peso.toString()}`)
            }



            result.innerHTML = `Tu peso referencia es: ${peso.toFixed(2)} kg`;

        } else {
            console.log("Faltan campos por rellenar")
            result.innerHTML = `Faltan campos por rellenar`;

        }
    }


})

