function validaSubsequente(array, subarray) {
    let i = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j] === subarray[i]) {
            i++;
        }
        if (i === subarray.length) {
            return true;
        }
    }

    return false;
}
