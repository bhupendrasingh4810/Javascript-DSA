// function climbStairs(n) {
//     cache = {};
//     if (n <= 2) {
//         return n;
//     }
//     if (cache[n]) return cache[n];
//     const steps = climbStairs(n - 1) + climbStairs(n - 2);
//     cache[n] = steps;
//     return steps;
// }

// const result = climbStairs(40);

// console.log(result);

function asyncOp(value, cb) {
    setTimeout(() => {
        console.log(value);
        cb(value * 2);
    }, Math.random() * 1000);
}

function processArr(arr, index) {
    if (index < arr.length) {
        asyncOp(arr[index], (res) => {
            processArr(arr, index + 1);
        })
    }
}

const input = [1,2,3,4];
processArr(input, 0);
console.log("Done")