function containsDuplicate(nums) {
    let hasDuplicate = false;
    let numCountObj = {};
    for (let i = 0; i < nums.length; i++) {
        // console.log(i);
        if (!numCountObj[nums[i]]) {
            numCountObj[nums[i]] = 1;
        } else {
            numCountObj[nums[i]] += 1;
            hasDuplicate = true;
            break;
        }
    }
    return hasDuplicate;
}

console.log(containsDuplicate([1, 1, 2, 2, 3, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 4, 1]));