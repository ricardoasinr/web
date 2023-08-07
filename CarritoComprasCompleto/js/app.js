// Definir Variables

const carrito = document.querySelector('#carrito');

const contenedorCarrito =  document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];


//Definir los eventos
cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregues un producto al carrito haciendo click a "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Cuando elimina un producto del carrito haciendo click a "X"
    carrito.addEventListener('click', eliminarCurso);

    //Cuando elimina un producto del carrito haciendo click a "Vaciar Carrito"
    vaciarCarritoBtn.addEventListener('click', ()=> {
        articulosCarrito = [];
        limpiarHTML();
    });
}

//Aquí se encuentran mis funciones

function agregarCurso(e) {
    e.preventDefault();     //Evita que se vaya al principio o que se mueva
   // console.log('Hola');
  //  console.log(e.target.parentElement.parentElement);
    if ( e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


function eliminarCurso(e) {
    //console.log(e.target.classList);
    //console.log(e.target.classList.contains('borrar-curso'));
    console.log(e.target.getAttribute('data-id'));
    if(e.target.classList.contains('borrar-curso')) {
        const cursoIdEliminar = e.target.getAttribute('data-id');

        //Eliminar del arreglo articulosCarrito utilizando el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id!== cursoIdEliminar);
    }
    carritoHTML();
}

//Lee el contenido del HTML que le dimos clic
//Y va a extraer la información del curso en un objeto
function leerDatosCurso(curso) {
    //console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoCurso);

    //Vamos a verificar si un producto ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    console.log(existe);
    if (existe) {
        //Actualizamos la cantidad del curso
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                //Retornamos el objeto actualizado
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }
    else {
            articulosCarrito = [...articulosCarrito,infoCurso];
    }


    //Agregar elementos al arreglo del carrito
    /*articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);*/



    //Colocar los cursos seleccionados al documento HTML
    carritoHTML()
}
//Muestra el carrito de compras en HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();
    ///////////////////

    articulosCarrito.forEach((curso)=> {
       console.log(curso);
       const  {titulo, precio, cantidad} = curso;
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>
               <img src="${curso.imagen}" width="80">
           </td>
           <td>${titulo}</td>
           <td>${precio}</td>
           <td>${cantidad}</td>
           <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
           </td>
           <td>${curso.id}</td>
           `;
       //Agregar el HTML al carrito en tbody

        contenedorCarrito.appendChild(row);
    });
}

//Limpiar el HTML
function limpiarHTML() {
    //manera más lenta de limpiar el HTML
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild)
    {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

/*
<div>

</div>*/
