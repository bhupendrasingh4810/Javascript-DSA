function factorial(n) {
    let res = 1;
    if (n <= 2) return n;

    if (n > 1) {
        res = n * factorial(n - 1);
    }
    return res;
}

const result = factorial(5);

console.log(result);