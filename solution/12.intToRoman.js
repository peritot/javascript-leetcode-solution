/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let ans = '';

  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i < nums.length; i++) {
    if (num >= nums[i]) {
      let count = Math.floor(num / nums[i]);
      for (let j = 0; j < count; j++) {
        ans += romans[i];
      }

      num = num % nums[i];
    }
  }

  return ans;
}
