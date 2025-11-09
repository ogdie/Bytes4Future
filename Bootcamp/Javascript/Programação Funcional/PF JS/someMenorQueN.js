//Cria uma função que recebe um array e um número como argumentos e verifica se possui algum elemento menor que n.
function existeMenorDoQueN(array, n){
    return array.some(menor => menor < n);
}