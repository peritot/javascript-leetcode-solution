/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  let ans = [];
  if (nums.length < 4) {
    return ans;
  }

  nums = nums.sort((a, b) => { return a - b });
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let nt = target - nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        let sum = nums[j] + nums[l] + nums[r];
        if (sum === nt) {
          ans.push([nums[i], nums[j], nums[l], nums[r]]);

          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }

          l++;
          r--;
        } else if (sum < nt) {
          l++;
        } else if (sum > nt) {
          r--;
        }
      }
    }
  }

  return ans;
}
