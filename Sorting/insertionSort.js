function insertionSort(arr) {

    for(let i=1; i< arr.length; i++) {
        let current = arr[i];
        if(arr[i - 1] > current) {
            arr[i] = arr[i - 1];
            arr[i - 1] = current;
        }
    }
    console.log(arr);
}

insertionSort([2, 8, 5, 9, 4, 6, 1]);