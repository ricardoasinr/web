// Escuchar el evento de clic en el botón de enviar
document.getElementById('enviar').addEventListener('click', function() {
    // Obtener los números introducidos por el usuario
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);

    // Generar la tabla de multiplicar
    var tablaMultiplicar = generarTablaMultiplicar(numero1, numero2);

    // Agregar la tabla a la página HTML
    var tablaElemento = document.getElementById('tabla');
    tablaElemento.innerHTML = tablaMultiplicar;
});

// Función para generar la tabla de multiplicar
function generarTablaMultiplicar(numero1, numero2) {
    // Crear la tabla vacía
    var tabla = '<thead><tr><th></th>';

    // Añadir los encabezados de columna
    for (var i = numero1; i <= numero2; i++) {
        tabla += '<th>' + i + '</th>';
    }

    tabla += '</tr></thead><tbody>';

    // Añadir las filas con los productos
    for (var i = 1; i <= 10; i++) {
        tabla += '<tr><td>' + i + '</td>';

        for (var j = numero1; j <= numero2; j++) {
            tabla += '<td>' + (i * j) + '</td>';
        }

        tabla += '</tr>';
    }

    tabla += '</tbody>';

    return tabla;
}
