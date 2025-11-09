//Cria uma função que recebe dois inteiros como argumentos e retorna o valor absoluto maior.
function maiorAbsoluto(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  return absA > absB ? absA : absB;
}