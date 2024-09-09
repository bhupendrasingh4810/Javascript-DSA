var alternateDigitSum = function(n) {
    let arr = String(n).split('');
    let sum = 0;
    for(let i = 1; i < arr.length + 1; i++) {
        console.log(i, i%2)
        if (i%2 == 0) {
            sum = sum - Number(arr[i - 1]);
        } else {
            sum  = sum + Number(arr[i - 1]);
        }
    }
    return sum;
};

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));