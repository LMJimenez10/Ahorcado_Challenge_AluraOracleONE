var botonJugar = document.querySelector("#iniciar-juego");
var botonVolver = document.querySelector("#reiniciar-juego");
var botonAgregarPalabra = document.querySelector("#agregar-palabra");
var inputAgregar = document.querySelector("#input-agregar-palabra");

var listaPalabras = ["argentina","brasil","chile","uruguay","paraguay","perú","ecuador","colombia","venezuela","bolivia","canadá","costa rica","cuba","el salvador","estados unidos","guatemala","guyana","haiti","honduras","jamaica","mexico","nicaragua","panama","republica dominicana","surinam"];

var jugando = false;
var palabraElegida = "";
var arrayLetras = [];


function elegirPalabra() {
    var numeroAleatorio = Math.floor(Math.random()*listaPalabras.length);
    palabraElegida = listaPalabras[numeroAleatorio];
    listaPalabras.splice(numeroAleatorio,1);
    return palabraElegida;
    
}

//Función genérica para capturar y enviar  letras al array del juego
function crearArrayDeLetras(palabra) {
    var letras = palabra.split("");
    arrayLetras = letras;
}


botonJugar.addEventListener("click",function(event) {
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
});

botonVolver.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
});

botonAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    listaPalabras.push(inputAgregar.value.toUpperCase());
    inputAgregar.value = "";
    inputAgregar.focus();
});

function iniciarJuego() {
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    
}

crearArrayDeLetras();













    




    




