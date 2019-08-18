/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = 0;

  let map = {};
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map[s[j]] > -1) {
      i = Math.max(map[s[j]], i);
    }
    map[s[j]] = j + 1;
    max = Math.max(max, j - i + 1);
  }

  return max;
}
