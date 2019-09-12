/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (divisor === 0) {
    return NaN;
  }
  if (dividend === 0) {
    return 0;
  }

  let negative = false
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    negative = true;
  }

  dividend = dividend > 0 ? dividend : -dividend;
  divisor = divisor > 0 ? divisor : -divisor;

  let ans = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    ans++;
  }
  if (negative) {
    ans = -ans;
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
