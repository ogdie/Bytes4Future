//Cria uma função que recebe um array como argumento e verifica se possui algum elemento par.
function existePar(array){
    return array.some(par => par % 2 === 0);
}