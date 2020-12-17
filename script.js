const API = 'https://rickandmortyapi.com/api/character/';
var parrafo = document.getElementById("texto");
var imagen = document.getElementById("imagen");
var especie = document.getElementById("especie");
var select = document.getElementById("selector");
var input = document.getElementById("inputTxt");
var numPerosnaje = 0;



const llamado = async (API, numPer) =>{
    try{
        const respuesta = await fetch(API);
        const texto = await respuesta.json();
        let consolaTexto = texto.results[numPer].name;
        let origenImagen = texto.results[numPer].image;
        let especieTexto = texto.results[numPer].species;
        parrafo.textContent = consolaTexto;
        imagen.src = origenImagen;
        especie.textContent = especieTexto;
        console.log(texto.info.count);
    } catch(error){
        console.log(error);
    }
}


// select.addEventListener('change', (event) => {
//     llamado(API, event.target.value);
// });

input.addEventListener('change', (event)=>{
    llamado(API, event.target.value);

});






