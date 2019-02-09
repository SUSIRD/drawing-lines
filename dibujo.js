var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";
var xi, xx;

for(l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    xy = 10 * l;
    xx = 10 * (l + 1);
    wy = 300 - xf;
    wx = 300 - xx;
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, 300, xy, xx, 0);
    dibujarLinea(colorcito, xy, 300, 300, wx);
    dibujarLinea(colorcito, 0, yi, wy, 0);
   
    console.log("linea" + l)
    
}

dibujarLinea(colorcito, 1, 1, 1, 300)
dibujarLinea(colorcito, 1, 299, 299, 299)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
 {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke();
    lienzo.closePath();
}