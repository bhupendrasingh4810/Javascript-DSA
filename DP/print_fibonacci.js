function printFibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;

    for(let i = 0; i < n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

printFibonacci(10);