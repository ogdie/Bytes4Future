//Cria uma função que recebe como argumento um número e retorna o fatorial desse número.

function fatorialN(n){
    let resultado = 1n;
    let i = 1;

    while (i <= n) {
        resultado *= BigInt(i);
        i++;
    }
    return resultado;
}