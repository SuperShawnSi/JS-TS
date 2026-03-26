//经典快排（会tle）
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function quickSort(left, right) {
    if (left >= right) {
      return;
    }
    const one = Math.floor(Math.random() * (right - left + 1)) + left;
    [nums[one], nums[right]] = [nums[right], nums[one]];

    const pIdx = partition(left, right);
    quickSort(left, pIdx - 1);
    quickSort(pIdx + 1, right);
  }

  function partition(left, right) {
    const val = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] < val) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }

  quickSort(0, nums.length - 1);
  return nums;
};

//优化：三路快排
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function quickSort(left, right){
        if (left >= right) {
            return;
        }
        const one = Math.floor(Math.random() * (right - left + 1)) + left;
        const p = nums[one];

        let lt = left;
        let rt = right;
        let i = left;

        while (i <= rt) {
            if (nums[i] < p) {
                [nums[lt], nums[i]] = [nums[i], nums[lt]];
                lt ++;
                i ++;
            } else if (nums[i] > p) {
                [nums[rt], nums[i]] = [nums[i], nums[rt]];
                rt --;
            } else {
                i ++;
            }
            
        }
        quickSort(left, lt - 1);
        quickSort(rt + 1, right);

    };

    quickSort(0, nums.length - 1);
    return nums;
};