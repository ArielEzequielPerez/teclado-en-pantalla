let listaDeLetras = ["q","w","e","r", "t","y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m"];
let pantalla = document.getElementById("pantalla");
let palabra= ""

const mostrar = (indice) =>{
    palabra = palabra+ `${listaDeLetras[indice]}`;
    mostrarPalabra(palabra);
}
function agregarEspacio(){
    palabra = palabra + " ";
    mostrarPalabra(palabra);
}

function borrar(){
    mostrarPalabra(palabra.slice(0,palabra.length -1));
}

function mostrarPalabra(palabra){
    pantalla.value = palabra;
}