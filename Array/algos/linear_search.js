function linearSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

const result = linearSearch([2, 5, 7, 9, 3, 1, 4, 8], 3);

console.log(result);

// Time Complexity: O(n)