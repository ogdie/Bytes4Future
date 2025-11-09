//Cria uma função que recebe um array de palavras e uma letra como argumentos e verifica se todas as palavras possuem essa letra.
function todasPossuemLetra(array, letra){
    return array.every(possuem => possuem.includes(letra));
}