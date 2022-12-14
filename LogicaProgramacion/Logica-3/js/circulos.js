var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);
var colores = ["blue", "red", "green"]; // Colores posibles con click-derecho
var indiceColorActual = 0; // comienza con blue

function cambioColor(){
    indiceColorActual++;
    if (indiceColorActual >= colores.length){
        indiceColorActual = 0; // Volvemos al primer color
    }
    return false; // no mostramos menu canvas con click derecho
}

function dibujarCirculo(evento) {
    // Capturamos las coordenadas de la pantalla y le restamos lo que sobra en left y top
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    
    pincel.fillStyle = colores[indiceColorActual] // Doy estilo al pincel
    pincel.beginPath(); // inicio camino
    pincel.arc(x,y,10,0,2*3.14); // indico parametros para el circulo
    pincel.fill(); // para que aparezca le doy relleno

    console.log("Usted hizo click en: " + x + " , " + y);
}



// Cuando uso la funcion como parametro de un evento va sin ()
// pantalla.onclick = mostrarAlerta;
pantalla.oncontextmenu = cambioColor;
pantalla.onclick = dibujarCirculo;