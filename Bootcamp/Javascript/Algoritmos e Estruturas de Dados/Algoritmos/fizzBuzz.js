function FizzBuzz(n) {
    let counter = [];

    for(let i = 1; i <= n; i++) {
       if (i % 15 === 0) {
        counter.push("FizzBuzz");
        } else if (i % 3 === 0) {
        counter.push("Fizz");
        }else if (i % 5 === 0) {
        counter.push("Buzz");
        }else {
        counter.push(" ");
        }
    }
    return counter;
}