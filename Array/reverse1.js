function reverse1(nums) {
    let newArr = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        newArr.push(nums[i]);
    }

    return newArr;
}

const reversedArr = reverse1([1, 2, 8, 3, 9, 4]);

console.log(reversedArr);


function reverse2(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l<r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    return nums;
}

const reversedArrr = reverse2([1, 2, 8, 3, 9, 4]);

console.log(reversedArrr);