function moveZeroesToBeg(arr) {
    let insertPos = arr.length - 1;
    for(let i = arr.length - 1; i>= 0; i--) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos--;
        }
    }
    
    while(insertPos >= 0) {
        arr[insertPos] = 0;
        insertPos--;
    }
    
    return arr;
}

const result = moveZeroesToBeg([9, 0, 7, 0, 0, 12, 6, 9, 0, 12, 7]);

console.log(result); 