/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  let ans = 0;

  let res = str.replace(/^\s*/, '').match(/^[+-]?\d+/);
  if (res && res.length > 0) {
    ans = Number(res[0]);
  } else {
    return 0;
  }

  let min = -2147483648;
  let max = 2147483647;
  if (ans > max) {
    ans = max;
  } else if (ans < min) {
    ans = min;
  }

  return ans;
}
