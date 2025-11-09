//Cria uma função que recebe um array como argumento e retorna um array clone do array inicial.
function cloneDoArray(array){
    if (array.length === 0) {
        return [];
    }
    const [primeiro, ...resto] = array;
    return [primeiro, ...cloneDoArray(resto)];
}