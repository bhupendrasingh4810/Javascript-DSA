function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

const result = bubbleSort([2, 5, 7, 9, 3, 1, 4, 8], 3);

console.log(result);

// Time Complexity: O(n^2)