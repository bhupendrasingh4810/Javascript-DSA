function countEven(nums) {
    let count = {
        evens: 0,
        odds: 0
    };

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) count['evens'] += 1;
        else count['odds'] += 1;
    }

    return count.evens;
}

const evenCount = countEven([2, 3, 4, 5, 69, 87, 66, 9, 54, 32]);

console.log(evenCount);