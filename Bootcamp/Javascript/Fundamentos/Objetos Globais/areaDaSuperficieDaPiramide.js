//Cria uma função que recebe o lado da base e a altura como argumentos e calcula a área da superfície de uma pirâmide quadrada.
function superficieDaPiramideQuadrada(ladodabase, altura){
    let inclinada = Math.sqrt(Math.pow(altura, 2) + Math.pow(ladodabase / 2, 2)); 
    return Math.pow(ladodabase, 2) + 2 * ladodabase * inclinada;
}