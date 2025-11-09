//Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.
//Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes."

function contaParesEntreDoisValores(valor1, valor2){
    if (valor1 === valor2) {
        return "Por favor introduza dois valores diferentes."
    }
    let contador = 0;
    let inicio = Math.min(valor1, valor2);
    let fim = Math.max(valor1, valor2);

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}