//Cria uma função que recebe um array como argumento e retorna o somatório de todos os elementos.
function somatorio(array){
    return array.reduce((total, current) => total + current, 0);
}