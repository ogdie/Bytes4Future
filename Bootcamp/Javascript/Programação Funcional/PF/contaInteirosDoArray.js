//Cria uma função que recebe um array como argumento e conta o número de elementos inteiros existentes nesse array.
function contaInteirosDoArray(array){
    if (array.length === 0) {
        return 0;
    }

    let primeiro = array[0];
    let resto = array.slice(1);

    if (Number.isInteger(primeiro)) {
        return 1 + contaInteirosDoArray(resto);
    } else {
        return contaInteirosDoArray(resto);
    }
}