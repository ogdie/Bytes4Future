//Cria uma variável do tipo number com o nome maxIndex.
//Guarda nessa variável o índice da primeira ocorrência do maior valor presente no array.
let array = [4, 5, 4, 5];
let max = array[0];
let maxIndex = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }
}

console.log(maxIndex);