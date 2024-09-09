function reverseNumber(x) {
    let num = x;
    if (!num) return null;

    let reversed = 0;

    while(num > 0) {
        const digit = num % 10;
        reversed = (reversed * 10) + digit;
        num = Math.floor(num / 10);
    }

    return reversed;
}

console.log(reverseNumber(1234321));