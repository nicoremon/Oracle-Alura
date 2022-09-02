var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var radio = 10;
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function limpiarPantalla (){
    pincel.clearRect(0,0,600,400);
}

var x = 0;

function actualizarPantalla (){
    limpiarPantalla();
    dibujarCirculo(x,30,30);
    x++;
}

function posicionAleatoria (maximo){
    return Math.floor(Math.random()*maximo);
}

xAleatorio = posicionAleatoria(570);
yAleatorio = posicionAleatoria(370);

function dibujarObjetivo (x,y){
    dibujarCirculo(x,y,radio +20,"red");
    dibujarCirculo(x,y,radio +10,"white");
    dibujarCirculo(x,y,radio,"red");
}

setInterval(dibujarObjetivo(xAleatorio,yAleatorio), 100);

// setInterval(actualizarPantalla, 10);




