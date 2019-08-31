/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let ans = 0;

  let rn = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };

  let i = 0;
  while (i < s.length) {
    if (i + 1 < s.length && rn[s.substr(i, 2)] > 0) {
      ans += rn[s.substr(i, 2)];

      i += 2;
    } else {
      ans += rn[s.substr(i, 1)];

      i += 1;
    }
  }

  return ans;
}
