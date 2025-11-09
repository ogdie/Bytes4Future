//Cria uma função que recebe um array e um número como argumentos e retorna o primeiro elemento menor que n.
function encontraMenorDoQueN(array, n){
    return array.find(menor => menor < n);
}