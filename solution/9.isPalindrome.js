/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x === 0) {
    return true;
  } else if (x < 0) {
    return false;
  }

  if (x % 10 === 0) {
    return false;
  } else {
    let s = x.toString();
    for (let i = 0; i <= s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
