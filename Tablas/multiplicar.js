function generarTablas(){

    let contenedor;
    contenedor = document.getElementById("contenedor");

    let cmpNumero;
    cmpNumero = document.getElementById("txtNumero");

    let valorNumero;
    valorNumero = cmpNumero.value;

    let numero;
    numero = parseInt(valorNumero);

    if(isNaN(numero)){
        contenedor.innerHTML = "<h1>Dato inválido</h1><p>Por favor escribe un número para generar la tabla.</p>";
        return;
    }

    let contenido;
    contenido = "";

    contenido = contenido + "<h1>Tabla del " + numero + "</h1>";
    contenido = contenido + "<table>";
    contenido = contenido + "<tr><th>Operación</th><th>Resultado</th></tr>";

    for(let i = 1; i <= 10; i++){
        contenido = contenido + "<tr>";
        contenido = contenido + "<td>" + numero + " x " + i + "</td>";
        contenido = contenido + "<td>" + (numero * i) + "</td>";
        contenido = contenido + "</tr>";
    }

    contenido = contenido + "</table>";

    contenedor.innerHTML = contenido;
}