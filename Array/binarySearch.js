function binarySearch(arr, l, r, k) {
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] === k) {
            return mid;
        } else if (arr[mid] > k) {
            r = mid - 1;
        } else // (arr[mid] < k) 
        {
            l = mid + 1;
        }
    }

    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`element is present at ${binarySearch(arr, 0, arr.length - 1, 6)}`)