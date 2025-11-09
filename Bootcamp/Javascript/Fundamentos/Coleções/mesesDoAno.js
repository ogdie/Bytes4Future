//Cria uma função que recebe um número como argumento e retorna o mês do ano correspondente.
//Caso o número seja inválido deve retornar a seguinte mensagem: 
// "Por favor insira um número entre 1 e 12."
function mesesDoAno(mes) {
  // Criamos o Map com os meses
  const meses = new Map([
    [1, "Janeiro"],
    [2, "Fevereiro"],
    [3, "Março"],
    [4, "Abril"],
    [5, "Maio"],
    [6, "Junho"],
    [7, "Julho"],
    [8, "Agosto"],
    [9, "Setembro"],
    [10, "Outubro"],
    [11, "Novembro"],
    [12, "Dezembro"]
  ]);

  // Verifica se o número está entre 1 e 12
  if (!meses.has(mes)) {
    return "Por favor insira um número entre 1 e 12.";
  }

  // Retorna o mês correspondente
  return meses.get(mes);
}