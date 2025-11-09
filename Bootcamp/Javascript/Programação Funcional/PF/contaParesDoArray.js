//Cria uma função que recebe um array como argumento e conta o número de elementos pares existentes nesse array.
function contaParesDoArray(array){
    if (array.length === 0) {
        return 0;
    }

    let primeiro = array[0];
    let resto = array.slice(1);
    if (primeiro % 2 === 0) {
        return 1 + contaParesDoArray(resto);
    } else {
        return contaParesDoArray(resto);
    }
}