//Cria uma função que recebe um array como argumento e cria um mapa com o número de ocorrências de cada elemento.
function mapaDeOcorrencias(array) {
  return array.reduce((mapa, elemento) => {
    mapa.set(elemento, (mapa.get(elemento) || 0) + 1);
    return mapa;
  }, new Map());
}