//Num bolo de aniversário existem várias velas.
//No array velas é indicado o tamanho de cada uma das velas.
//Implementa a função contarVelasMaisAltas de forma a que seja sempre retornado o número de velas que têm o maior tamanho.
function contarVelasMaisAltas(velas) {
    let maior = velas[0];
    for (let i = 0; i < velas.length; i++) {
        if (velas[i] > maior) {
            maior = velas[i];
        }
    }

    let contador = 0;
    for (let i = 0; i < velas.length; i++) {
        if (velas[i] === maior) {
            contador++;
        }
    }
    return contador;
}