const API = 'https://rickandmortyapi.com/api/character';
var parrafo = document.getElementById("texto");
var imagen = document.getElementById("imagen");

const llamado = async (API) =>{
    try{
        const respuesta = await fetch(API);
        const texto = await respuesta.json();
        let consolaTexto = texto.results[0].name;
        let origenImagen = texto.results[0].image;
        parrafo.textContent = consolaTexto;
        imagen.src = origenImagen;
    } catch(error){
        console.log(error);
    }
}

llamado(API);



