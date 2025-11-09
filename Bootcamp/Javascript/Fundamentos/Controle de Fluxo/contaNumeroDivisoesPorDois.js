//Cria uma função que recebe como argumento um número e retorna o número de vezes em que é possível fazer a divisão inteira desse número por //2.//
//Utiliza o que aprendeste sobre  para resolver este exercício
function contaNumeroDeDivisoesPorDois(n){
    let contador = 0;

    for (let i = n; i >= 2; i = Math.floor(i / 2)) {
        contador++;
    }

    return contador;
}