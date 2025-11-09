//Cria uma função que recebe um array como argumento e verifica se possui algum elemento negativo.
function existeNegativo(array){
    return array.some(menor => menor < 0);
}