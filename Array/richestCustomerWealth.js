function richestCustomerWealth(nums) {
    let list = [];
    let customer = null;
    let wealth = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!list[i]) {
            list[i] = 0;
        }
        for (let j = 0; j < nums.length; j++) {
            list[i] += nums[i][j];
        }
    }
    for (let k = 0; k < list.length; k++) {
        if (wealth < list[k]) {
            customer = k;
            wealth = list[k];
        }
    }
    console.log(`Customer ${customer} has max wealth of ${wealth}`)
}

const result = richestCustomerWealth([[7, 1, 3], [2, 8, 7], [1, 9, 5]]);
// console.log(result);