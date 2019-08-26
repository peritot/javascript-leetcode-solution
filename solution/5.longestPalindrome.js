/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let ans = '';

  if (s.length < 2) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let r = s.substring(i, j);
      if (isPalindrome(r) && r.length > ans.length) {
        ans = r;
      }
    }
  }

  return ans;
}

const isPalindrome = (s) => {
  for (let i = 0; i <= s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
