/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    const b = target - a;
    const j = numIndex(nums.slice(i + 1, nums.length), b);
    if (j > -1) {
      return [i, j + i + 1];
    }
  }
}

const numIndex = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    if (target === nums[index]) {
      return index;
    }
  }
  return -1;
}
