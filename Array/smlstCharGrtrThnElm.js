function smlstCharGrtrThnElm(arr, l, r, k) {

    let res = -1;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (arr[mid] === k) {
            l = mid + 1;
        } else if (arr[mid] > k) {
            res = arr[mid];
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
}

const char = smlstCharGrtrThnElm([1, 4, 4, 8, 9], 0, 4, 5);

console.log(char);