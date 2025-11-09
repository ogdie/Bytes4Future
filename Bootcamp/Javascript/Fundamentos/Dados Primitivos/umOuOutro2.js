//Cria uma função que recebe como argumentos três booleanos e que retorna true se um, e apenas um, deles for true.

function umOuOutro(boolean1, boolean2, boolean3) {
    return (boolean1 + boolean2 + boolean3) === 1;
}