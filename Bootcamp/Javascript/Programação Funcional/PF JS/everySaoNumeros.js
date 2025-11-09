//Cria uma função que recebe um array como argumento e verifica se todos os elementos são números.
function todosSaoNumeros(array){
    return array.every(num => Number.isInteger(num));
}