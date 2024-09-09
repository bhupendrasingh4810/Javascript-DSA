function thirdMin(arr) {
    let min = Number.MAX_VALUE;
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            count++;
        }
        // if (count == 3) break;
    }

    console.log(min);
}

thirdMin([3, 6, 4, 8, 9, 2, 7, 5, 1]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]