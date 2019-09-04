/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      if (stack.pop() !== map[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
