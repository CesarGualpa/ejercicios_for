function generarTablas(){
    let contenedor = document.getElementById("contenedor");

    let contenido = "";
    let numero = 5;

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