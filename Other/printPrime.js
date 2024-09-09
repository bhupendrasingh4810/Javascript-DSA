// Print prime numbers - O(n^2)

// function printPrime(n) {
//     let count = 0;
//     for (let i=2; i<=n; i++) {
//         for (let j=1; j<=i; j++) {
//             if (i % j == 0) {
//                 // console.log(i, j)
//                 count++;
//             }
//         }
//         if (count == 2) {
//             console.log(i);
//         }
//         count = 0;
//     }
// }

function isPrime(num) {
   for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
   }
   return true;
}

function printPrime(n) {
    for (let i = 1; i < n; i +=2) {
        if (isPrime(i)) console.log(i);
    }
}

printPrime(30);