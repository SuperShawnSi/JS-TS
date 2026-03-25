// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   const nums1 = nums.sort((x, y) => y - x);
//   return nums1[k - 1];
// };

//快速选择算法

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const target = nums.length - k;

    function quickSelect(left, right) {
        if (left === right) return nums[left];

        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        const index = partition(left, right);

        if (index === target) return nums[index];
        if (index < target) return quickSelect(index + 1, right);
        return quickSelect(left, index - 1);
    }

    function partition(left, right) {
        const pivot = nums[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }

        [nums[i], nums[right]] = [nums[right], nums[i]];
        return i;
    }

    return quickSelect(0, nums.length - 1);
};

//过大样例专用版

