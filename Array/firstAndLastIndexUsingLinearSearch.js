function findFirstIndex(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return i;
        }
    }
    return -1;
}

let firstIndex = findFirstIndex([1, 4, 5, 6, 5, 8, 3], 5);
console.log(firstIndex);

function findLastIndex(arr, k) {
    let index = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) index = i;
    }
    return index;
}

let lastIndex = findLastIndex([1, 4, 5, 6, 5, 8, 3], 5);
console.log(lastIndex);