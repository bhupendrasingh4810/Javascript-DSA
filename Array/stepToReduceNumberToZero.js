function stepToReduceNumberToZero(num) {
    let steps = 0;
    if (num === 0) return steps;

    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
            steps++;
        } else {
            num -= 1;
            steps++;
        }
    }
    return steps;
}

const step1 = stepToReduceNumberToZero(0);
const step2 = stepToReduceNumberToZero(14);
const step3 = stepToReduceNumberToZero(8);
console.log(step1, step2, step3);