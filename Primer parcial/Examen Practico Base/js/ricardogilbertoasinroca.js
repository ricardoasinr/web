
document.addEventListener('DOMContentLoaded', function() {

    const autos = [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2020,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2020,
            precio: 40000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A6',
            year: 2020,
            precio: 35000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2019,
            precio: 80000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2020,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A3',
            year: 2017,
            precio: 55000,
            puertas: 2,
            color: 'Negro',
            transmision:
                'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2020,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2017,
            precio: 60000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2016,
            precio: 30000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }
    ];

    const busqueda =
        {
            marca: '',
            modelo: '',
            year: '',
            precio: '',
            puertas: '',
            color: '',
            transmision: ''
        }


    const formulario = document.querySelector('#buscador');
    const resultados = document.querySelector('#resultado');
    const years = document.querySelector('#year');

    const marca = document.querySelector('#marca');



    marca.addEventListener('blur', seleccionado)




    // autos.forEach(autos => {
    //     mostrarListaDeAutos(`${autos.marca} - ${autos.modelo} -  ${autos.year} - Transmisión: ${autos.transmision} - Precio: ${autos.precio} - Color: ${autos.color}`);
    //
    // } )

    completarYears()

    function seleccionado (e){



        console.log(e.target.value)
        autos.forEach(autos => {


            if(autos.marca === e.target.value){

                busqueda.marca = autos.marca
                busqueda.modelo = autos.modelo
                busqueda.year = autos.year
                busqueda.transmision = autos.transmision
                busqueda.precio = autos.precio
                busqueda.color = autos.color
                busqueda.puertas = autos.puertas
                console.log(busqueda)
                mostrarListaDeAutos(`${busqueda.marca} - ${busqueda.modelo} -  ${busqueda.year} - Transmisión: ${busqueda.transmision} - Precio: ${busqueda.precio} - Color: ${busqueda.color}`);


            }

        } )


    }

    function mostrarListaDeAutos (auto) {

        //Genera un alerta en el HTML
        const resultado = document.createElement('P');
        resultado.textContent = auto;
        resultado.classList.add('text-center');
        resultados.appendChild(resultado);

    }

    function completarYears(){

        const max=new Date().getFullYear();
        const min = max - 10;
        console.log(`Años ${min} ${max}`)
        const selects = document.createElement('option');

        for (let i = min; i<=max; i++) {
            console.log(i)
            selects.textContent = i.toString();
            //selects.innerHTML = `<option value="${i}">${i}</option>`;
            years.appendChild(selects);

        }
        //years.appendChild(selects);










    }





});


