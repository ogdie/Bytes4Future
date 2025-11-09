//Cria uma função que recebe um array como argumento e verifica se possui algum elemento múltiplo de 3.
function existeMultiploDeTres(array){
    return array.some(multTres => multTres % 3 === 0);
}