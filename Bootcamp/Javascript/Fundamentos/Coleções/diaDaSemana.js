//Cria uma função que recebe um número como argumento e retorna o dia da semana correspondente.
//Caso o número seja inválido deve retornar a seguinte mensagem: "Número inválido. Por favor insira um número entre 1 e 7."
//1 - Domingo 2 - Segunda-Feira 3 - Terça-Feira 4 - Quarta-Feira 5 - Quinta-Feira 6 - Sexta-Feira 7 - Sábado
function diaDaSemana(dia){
    const dias = new Map([
    [1, "Domingo"],
    [2, "Segunda-Feira"],
    [3, "Terça-Feira"],
    [4, "Quarta-Feira"],
    [5, "Quinta-Feira"],
    [6, "Sexta-Feira"],
    [7, "Sábado"]
  ]);

  // Verifica se o número está entre 1 e 7
  if (!dias.has(dia)) {
    return "Número inválido. Por favor insira um número entre 1 e 7.";
  }

  // Se for válido, retorna o dia correspondente
  return dias.get(dia);
}