// Time Complexity -->  Olog2(N) 
// Space Complexity -->  O(1) -> using only variable, not creating any arrays 

function findFirstIndex(arr, l, r, k) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === k) {
    //         return i;
    //     }
    // }
    // return -1;

    let res = -Infinity;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        console.log(l, r, mid);
        if (arr[mid] === k) {
            res = mid;
            // return mid;
        } else if (arr[mid] > k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
}

let a = [1, 4, 5, 5, 6, 8, 8, 9, 9];
let firstIndex = findFirstIndex(a, 0, a.length - 1, 8);
console.log(firstIndex);

// function findLastIndex(arr, k) {
//     let index = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === k) index = i;
//     }
//     return index;
// }

// let lastIndex = findLastIndex([1, 4, 5, 6, 5, 8, 3], 5);
// console.log(lastIndex);