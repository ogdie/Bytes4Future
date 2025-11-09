//Cria uma função que recebe duas diagonais de um losango como argumentos e calcula o perímetro dessa figura geométrica.

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    let lado = Math.sqrt((diagonalMaior / 2) ** 2 + (diagonalMenor / 2) ** 2);
    return 4 * lado;
}