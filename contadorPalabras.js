const prompt = require("prompt");

function contadorPalabras(texto) {

    let arrTexto = texto.toLowerCase().split(' ');
    let numPalabras = {};

    arrTexto.forEach(palabra => {
        
        if (palabra in numPalabras) {
            numPalabras[palabra] = numPalabras[palabra] + 1;
        } else {
            numPalabras[palabra] = 1;
        }

    });

    Object.keys(numPalabras).forEach(key => {
        console.log(`"${key}" se repite ${numPalabras[key]} ${ numPalabras[key] === 1 ? 'vez' : 'veces' }.`);
    });
}

prompt.start();
console.log('Introduzca el texto para realizar el conteo de palabras: ');
prompt.get(['texto'], (err, result) => {
    contadorPalabras(result.texto);
});