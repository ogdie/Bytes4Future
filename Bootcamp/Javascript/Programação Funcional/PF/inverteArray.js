//Cria uma função que recebe um array como argumento e retorna o array invertido.
function inverteArray(array){
    if (array.length === 0) {
        return [];
    }

    let ultimo = array[array.length - 1];
    let resto = array.slice(0, array.length - 1);

    return [ultimo].concat(inverteArray(resto));
}