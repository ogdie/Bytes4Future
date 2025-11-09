//Cria uma função que recebe um array de datas como argumento e retorna a data mais antiga.
function dataMaisAntiga(datas) {
    let antiga = datas[0];
    for (let i = 1; i < datas.length; i++) {
        if (datas[i] < antiga) {
        antiga = datas[i];
        }
    }

    return antiga;
}