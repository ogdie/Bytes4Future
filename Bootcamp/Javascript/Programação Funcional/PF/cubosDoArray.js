//Cria uma função que recebe um array como argumento e retorna um array com o cubo de cada elemento.
function cubosDoArray(array){
    if (array.length === 0) {
        return [];
    }

    let primeiro = array[0];
    let resto = array.slice(1);

    return [primeiro ** 3, ...cubosDoArray(resto)];
}