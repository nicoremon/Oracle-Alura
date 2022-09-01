// Conecta Cavnas con la variable pantalla
var pantalla = document.querySelector("canvas");
// Captura el contenido de la pantalla
var pincel = pantalla.getContext("2d");

// Funcione Fill (Llenar) Rect (Rectangulo) (4 parametros)
// Posicion Inicial 0,0,600,400 inicia en 0.0 y avanza 600 y 400 
pincel.fillStyle = "white"; // Propiedad o Caracteristica
pincel.fillRect(0,0,600,400); // Funcion

pincel.fillStyle = "lightblue";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "lightblue";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath(); //Iniciar un nuevo camino
pincel.moveTo(300,200);
pincel.lineTo(250,330);
pincel.lineTo(300,330);
pincel.fill();

pincel.fillStyle = "yellow";
pincel.beginPath(); //Iniciar un nuevo camino
pincel.moveTo(300,200); // desde donde nace el rayo
pincel.lineTo(200,290); // linea hasta borde
pincel.lineTo(230,320);
pincel.fill();

pincel.fillStyle = "yellow";
pincel.beginPath(); //Iniciar un nuevo camino
pincel.moveTo(300,200); // desde donde nace el rayo
pincel.lineTo(200,200); // linea hasta borde
pincel.lineTo(200,250);
pincel.fill();

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.arc(300,200,50,0,2*3.14);
pincel.fill();