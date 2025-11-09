//Cria uma função que recebe um array como argumento e verifica se todos os elementos são negativos.
function todosSaoNegativos(array){
    return array.every(negativo => negativo < 0);
}