// Encontra os erros de sintaxe do seguinte excerto.
// A função recebe dois números e retorna um número nesse intervalo.
function aleatorioEntre(min, max) {
    let nrAleatorio = Math.floor((Math.random() * (max - min + 1)) + min);
    return nrAleatorio;
}