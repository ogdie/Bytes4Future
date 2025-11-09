//Cria uma função que recebe um array como argumento e retorna o primeiro elemento primo.
function encontraPrimo(array) {
  function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return array.find(function(num) {
    return ehPrimo(num);
  });
}