var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const result = [];
    let sum = 0;
    for(let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (i==j) {
                let n = nums1[i] - nums2[j];
                sum = sum + (n**2);
                console.log(nums1[i], nums2[j], n)
            }
        }
        results
    }
    console.log(sum);
};

minSumSquareDiff([1,2,3,4], [2,10,20,19], 0, 0)