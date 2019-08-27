/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + x % 10;
    x = parseInt(x / 10);
  }
  if (ans > 2147483647 || ans < -2147483648) {
    return 0;
  }
  return ans;
}
