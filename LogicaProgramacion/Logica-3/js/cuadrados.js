        function dibujarCuadrado(x,y, color){
            // Conecta Cavnas con la variable pantalla
            var pantalla = document.querySelector("canvas");
            // Traiga todo el contenido de pantalla en 2 dimensiones
            var pincel = pantalla.getContext("2d");

            pincel.fillStyle = color;
            pincel.fillRect(x,y,50,50);
            pincel.strokeStyle = "black"; // Definimos tipo de linea (borde)
            pincel.strokeRect(x,y,50,50); // Dibujamos cuadrado con lineas negras
        }
        
        // // Dibujamos bandera con While
        // var x = 0;
        // while(x < 600){
        //     dibujarCuadrado(x,0,"red");
        //     dibujarCuadrado(x,50,"yellow");
        //     dibujarCuadrado(x,100,"green");
        //     x = x + 50;
        // }
        
        // Dibujamos bandera con For
        for (let x =0; x < 600; x = x +50){
            dibujarCuadrado(x,0,"red");
            dibujarCuadrado(x,50,"yellow");
            dibujarCuadrado(x,100,"green");
        }
