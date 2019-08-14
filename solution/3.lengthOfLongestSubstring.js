/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let num = 1;
    let cm = { [s[i]]: 1 };
    for (let j = i + 1; j < s.length; j++) {
      if (cm[s[j]] === 1) {
        break;
      } else {
        num++;
        cm[s[j]] = 1;
      }
    }
    max = num > max ? num : max;
  }

  return max;
}
