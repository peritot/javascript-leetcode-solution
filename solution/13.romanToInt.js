/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let ans = 0;

  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let i = 0;
  let j = 0;
  while (i < romans.length && j < s.length) {
    if (s.substr(j, romans[i].length) === romans[i]) {
      ans += nums[i];

      j += romans[i].length;
    } else {
      i++;
    }
  }

  return ans;
}
