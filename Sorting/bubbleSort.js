function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort([2, 8, 5, 9, 4, 6, 1]);

// Space Complexity O(n)
// Time Complexity O(nxn)

// BubbleSort func takes an array as an argument.
// Starts 2 loops: outer loop goes from 0 to len - 1, and inner loop from 0 to len - 2.
// Inside inner loop, it checks if current elem arr[j] > arr[j+1].
// If it is, it swaps 2 elem using variable temp.
// Note: Bubble sort -> not most efficient sorting algo, especially for large arrays, but it can be useful for small ones or for edu purposes.