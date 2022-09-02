var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var x = 0;
var radio = 10;
var xAleatorio;
var yAleatorio;
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

function posicionAleatoria (maximo){
    return Math.floor(Math.random()*maximo);
}

function actualizarPantalla (){
    limpiarPantalla();
    xAleatorio = posicionAleatoria(570);
    yAleatorio = posicionAleatoria(370);
    dibujarObjetivo(xAleatorio,yAleatorio);
    x++;
}

function dibujarObjetivo (x,y){
    dibujarCirculo(x,y,radio +20,"red");
    dibujarCirculo(x,y,radio +10,"white");
    dibujarCirculo(x,y,radio,"red");
}

setInterval(actualizarPantalla, 1000);

function disparo (evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if((x < xAleatorio + radio)&&(x > xAleatorio - radio)&&(y < yAleatorio + radio)&&(y > yAleatorio - radio)) {
        alert("Tiro Certero");
    }
}

//Capturar el click
pantalla.onclick = disparo;




