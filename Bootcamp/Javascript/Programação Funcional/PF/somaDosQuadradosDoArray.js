//Cria uma função que recebe um array como argumento e retorna a soma dos quadrados de cada elemento.
function somaDosQuadradosDoArray(array){
    if (array.length === 0) {
        return 0;
    }

    const primeiro = array[0];
    const resto = array.slice(1);

    return primeiro ** 2 +somaDosQuadradosDoArray(resto);
}