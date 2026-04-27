function generarTablas(){
    let contenedor = document.getElementById("contenedor");

    // leer valor del input
    let numero = parseInt(document.getElementById("txtNumero").value);

    // validación básica
    if(isNaN(numero)){
    contenedor.innerHTML = "<h1>Dato inválido</h1><p>Por favor escribe un número para generar la tabla.</p>";
    return;
}

    let contenido = "";

    contenido += "<h1>Tabla del " + numero + "</h1>";
    contenido += "<table>";
    contenido += "<tr><th>Operación</th><th>Resultado</th></tr>";

    for(let i = 1; i <= 10; i++){
        contenido += "<tr>";
        contenido += "<td>" + numero + " x " + i + "</td>";
        contenido += "<td>" + (numero * i) + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    contenedor.innerHTML = contenido;
}