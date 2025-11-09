//Cria uma variável do tipo number com o nome max.
//Guarda nessa variável o maior valor presente no array.
let array = [4, 1, 4, 5];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);
