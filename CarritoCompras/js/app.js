//Definir variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];



//Definir los eventos
const cargarEventsListeners = () => {
    //Cuando se de click "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
};

//Funciones
//Agregar curso

//Leer datos
const leerDatosCurso = curso => {
    console.log(curso)
    const informacionCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombreDelCurso: curso.querySelector('h4').innerText,
        nombreDelInstructor:  curso.querySelector('p').textContent,
        precio: curso.querySelector('.precio span').textContent,        //precioDescuento: curso.querySelector('.precio span').innerText,
        cantidad: 1
    }

    //Agregar elementos al carrito
    articulosCarrito = [...articulosCarrito, informacionCurso]
    console.log(`Lista:`)
    console.log(articulosCarrito)
    console.log(`Información:`)
    console.log(informacionCurso)

   const existe = articulosCarrito.some(curso => curso.id === informacionCurso.id)
    console.log(`Existe: `)
    if(existe){

    }


    //Vamos a colocar al carrito los cursos seleccionados
    carritoHTML()


};

const carritoHTML= () => {
    //limpiarHTML()
    articulosCarrito.forEach( curso =>{
        const {imagen, nombreDelCurso, precio ,cantidad, id} = curso;
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>
        <img src="${imagen}"width="80">
        </td>
        <td>${nombreDelCurso}</td>  
        <td>${precio}</td>    
        <td>${cantidad}</td>    
         
        <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
</td>
        `;

        contenedorCarrito.appendChild(fila);
    });

}



const agregarCurso = (e) => {
    //console.log(e.target)
    //console.log(e.target.parentElement.parentElement)
    console.log(e.target.classList.contains("agregar-carrito"))

    if(e.target.classList.contains("agregar-carrito")){
        e.preventDefault() //No vuelve arriba
        const cursoSeleccionado = e.target.parentElement.parentElement
        //console.log(cursoSeleccionado)
        leerDatosCurso(cursoSeleccionado)
    }
};


cargarEventsListeners()


