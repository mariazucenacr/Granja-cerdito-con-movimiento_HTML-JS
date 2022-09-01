//PARA EL EVENTO DE LAS TECLAS para el cerdito movible
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}
var vp = document.getElementById("pequeVilla");
var papel =vp.getContext("2d");

document.addEventListener("keydown",moverCerdo); //EL EVENTO PARA LA MOVILIDAD CON TECLAS

var fondo = {
  url:"tile.png",
  cargaOK:false //Va a empezar en falso
};

var vaca = {
  url:"vaca.png",
  cargaOK:false //Va a empezar en falso
};

var pollo = {
  url:"pollo.png",
  cargaOK:false //Va a empezar en falso
};

//cerdito movible
var cerdo = {
  url:"cerdo.png",
  cargaOK:false //Va a empezar en falso
};

//CANTIDAD DE ANIMALES DE FORMA ALEATORIA
var cantidad = aleatorio(0,15);

//PRIMERO CARGAMOS LA IMAGEN
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);//CARGA LA IMAGEN

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);//CARGA LA IMAGEN

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);//CARGA LA IMAGEN

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);//CARGA LA IMAGEN

//LUEGO ESTA IMAGEN YA CARGADA SE INSERTA O SE DIBUJA EN CANVAS
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

//PUNTO INICIAL DEL cerdito
var xCerdo=250-80;
var yCerdo=250-80;

function dibujar() {
  if(fondo.cargaOK) //Aqui puedo igual a true, pero recordar que
                    //la condición en if siempre es verdadera
                    //por lo que no es necesario
  {
  papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK) {
    //Para saber cuantas vaquitas hay en el mapa
    console.log("Hay " + cantidad + " vacas.");
    //PARA DIBUJAR VARIAS VACAS EN DIFERENTES POSICIONES DEL MAPA
    for (var v=0; v<cantidad; v++){
    //PARA DIBUJAR A LA VACA EN DISTINTAS POSICIONES DEL MAPA
    var x = aleatorio(0,5);//Aqui se tiene que poner un número que
                          //al multiplicarlo luego con 80 de
                          // menos de 420 para que quede bien en el mapa
    var y = aleatorio(0,5);
    //Para que las vas no salgan una encima de la otra
    //arreglamos de la siguiente manera:
    //en este caso la imagen es de 80*80 por lo que las coordenadas
    //se les debe multiplicar *80 para que el número aleatorio respete
    // ese espacio por imagen entonces:
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOK) {
    //Para saber cuantas vaquitas hay en el mapa
    console.log("Hay " + cantidad + " pollos.");
    //PARA DIBUJAR VARIAS VACAS EN DIFERENTES POSICIONES DEL MAPA
    for (var p=0; p<cantidad; p++){
    //PARA DIBUJAR AL POLLO EN DISTINTAS POSICIONES DEL MAPA
    var x = aleatorio(0,5);//Aqui se tiene que poner un número que
                          //al multiplicarlo luego con 80 de
                          // menos de 420 para que quede bien en el mapa
    var y = aleatorio(0,5);
    //Para que las vas no salgan una encima de la otra
    //arreglamos de la siguiente manera:
    //en este caso la imagen es de 80*80 por lo que las coordenadas
    //se les debe multiplicar *80 para que el número aleatorio respete
    // ese espacio por imagen entonces:
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(pollo.imagen, x, y);
    }
  }

  if(cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }

}

function aleatorio(mini,maxi){
  var resultado;
  resultado = Math.floor (Math.random() * (maxi-mini+1)) + mini;
  return resultado;
}

//EVENTO DE MOVIMIENTO CON TECLAS
function moverCerdo(evento) {
  var xCerdo=250-80;
  var yCerdo=250-80;
  var movimiento = 80;

  switch (evento.keyCode) {
    case teclas.UP:
      cargarCerdos(xCerdo,yCerdo);
      yCerdo = yCerdo - movimiento;
      break;

    case teclas.DOWN:
      cargarCerdos(xCerdo,yCerdo);
      yCerdo = yCerdo + movimiento;
      break;

    case teclas.LEFT:
      cargarCerdos(xCerdo,yCerdo);
      xCerdo = xCerdo - movimiento;
      break;

    case teclas.RIGHT:
      cargarCerdos(xCerdo,yCerdo);
      xCerdo = xCerdo + movimiento;
      break;

    default:
      console.log("Otra tecla");
      break;

  }

}
