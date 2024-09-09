function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        console.log(start, end, mid);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return -1;
}

const result = binarySearch([22, 25, 27, 29, 33, 41, 44, 48], 33);

console.log(result);

// Time Complexity: O(log n)
// Works on sorted array