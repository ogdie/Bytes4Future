//Cria uma função que recebe um array como argumento e encontra o valor máximo ímpar.
function valorMaximoImpar(array){
    return array.reduce((max, current) => {
        if (current % 2 !== 0) {       // verifica se é ímpar
        if (max === null || current > max) {
            return current;             // atualiza o máximo ímpar
        }
        }
        return max;                     // mantém o máximo atual
    }, null);
}