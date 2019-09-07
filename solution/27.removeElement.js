/**
 * @param {number[]} nums
 * @return {number}
 */
const removeElement = function (nums, val) {
  let ans = nums.length;

  let i = 0;
  while (i < ans) {
    if (nums[i] === val) {
      nums[i] = nums[--ans];
    } else {
      i++;
    }
  }

  return ans;
}
