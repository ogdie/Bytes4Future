//Cria uma função que recebe um array como argumento e encontra o valor máximo desse array.
function valorMaximo(array){
    return array.reduce((max, current) => current > max ? current : max, array[0]);
}