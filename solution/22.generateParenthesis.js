/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let ans = [];

  step(ans, '', 0, 0, n);

  return ans;
}

const step = (ans, s, open, close, max) => {
  if (s.length === max * 2) {
    ans.push(s);
    return;
  }
  if (open < max) {
    step(ans, s + '(', open + 1, close, max);
  }
  if (close < open) {
    step(ans, s + ')', open, close + 1, max);
  }
}
