//Cria uma função que recebe como argumento um número e retorna a soma de todos os números do zero até ao número inclusive.

function somatorioAteN(n){
    let soma = 0;
    let i = 0;
    while (i <= n) {
        soma += i;
        i++;
    }
    return soma;
}