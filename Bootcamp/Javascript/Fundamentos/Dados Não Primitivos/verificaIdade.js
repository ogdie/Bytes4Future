//Cria a função verificaIdade que recebe um argumento que é do tipo objeto e retorna o mesmo objeto com 
// uma propriedade maiorDeIdade que é um booleano, dependente da idade da pessoa.
function verificaIdade(pessoa) {
    pessoa.maiorDeIdade = pessoa.idade >= 18;
    return pessoa;
}
