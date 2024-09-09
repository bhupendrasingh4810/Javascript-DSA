function printMatrix(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // if (i === j) console.log(arr[i][j]);
            // sum = sum + arr[i][j];
            sum += arr[i][j];
        }
    }
    console.log(sum);
}

printMatrix([
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]);