//Cria uma função que recebe o lado da base e o comprimento como argumentos e calcula a área da superfície de um paralelepípedo quadrado.
function superficieDoParalelepipedoQuadrado(ladodabase, comprimento){
    return 2 * Math.pow(ladodabase, 2) + 4 * ladodabase * comprimento;
}