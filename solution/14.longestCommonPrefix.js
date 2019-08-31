/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let ans = '';

  if (strs.length === 0) {
    return ans;
  }

  let i = 0;
  let j = 0;
  while (j < strs[0].length && j < strs[i].length) {
    if (strs[0][j] === strs[i][j]) {
      if (i === strs.length - 1) {
        ans += strs[0][j];

        j++;
        i = 0;
      } else {
        i++;
      }
    } else {
      return ans;
    }
  }
  return ans;
}
