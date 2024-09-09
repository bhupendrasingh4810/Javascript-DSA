// Linear Search with loop

function linearSearch(arr, num) {
    let position = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            position = i;
            break;
        }
    }

    console.log(`${num} is present at position ${position}`)
}

linearSearch([5, 63, 8, 6, 2], 63);

// Linear Search with recursion

function linearRecursionSearch(arr, i, e, num) {
    if (arr[i] === num) {
        return i;
    }
    if (i === e) {
        return -1;
    }
    return linearRecursionSearch(arr, i + 1, e, num);
}
let arr = [3, 6, 4, 8, 9, 1, 7];
console.log(`position of ${1} is ${linearRecursionSearch(arr, 0, arr.length, 1)}`);