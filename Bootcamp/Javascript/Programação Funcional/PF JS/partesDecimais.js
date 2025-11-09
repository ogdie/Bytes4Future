//Cria uma função que recebe um array como argumento e retorna um array com a parte decimal de cada elemento arredondada às centésimas.
function partesDecimais(array) {
  return array.map(function(num) {
    const str = num.toString();
    const parts = str.split('.');
    if (parts[1]) {
      return Number(parts[1].slice(0, 2)) / Math.pow(10, parts[1].slice(0, 2).length);
    } else {
      return 0;
    }
  });
}