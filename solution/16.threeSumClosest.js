/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  let ans = 0;

  let min = Number.MAX_VALUE;
  nums = nums.sort((a, b) => { return a - b });
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r] - target;
      if (min > Math.abs(sum)) {
        min = Math.abs(sum);
        ans = nums[i] + nums[l] + nums[r];
      }
      if (sum === 0) {
        return ans;
      } else if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      }
    }
  }

  return ans;
}
