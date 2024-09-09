function sumOfDigit(num) {
    sum = 0;
    let n = num;
    while (n != 0) {
        let last_digit = n % 10;
        sum += last_digit;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}

sumOfDigit(12349472398574398789320580342759834709574);