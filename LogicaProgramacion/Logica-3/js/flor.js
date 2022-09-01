    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);

    function dibujarCirculo(x, y, radio, color) {

            pincel.fillStyle = color;
            pincel.beginPath();
            pincel.arc(x, y, radio, 0, 2*3.14);
            pincel.fill();
        
    }
    function dibujarFlor(){
            dibujarCirculo(300,200,50,"red");
            dibujarCirculo(300,100,50,"yellow");
            dibujarCirculo(300,300,50,"blue");
            dibujarCirculo(200,200,50,"orange");
            dibujarCirculo(400,200,50,"black");
    }
        
    dibujarFlor();
                