//Cria uma função que recebe dois comprimentos (das bases) e a altura de um trapézio isósceles como argumentos e calcula o perímetro desse trapézio.

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    let lado = Math.sqrt(Math.pow((comprimentoMaior - comprimentoMenor)/2, 2) + altura ** 2);
    return comprimentoMaior + comprimentoMenor + (2 * lado);
}