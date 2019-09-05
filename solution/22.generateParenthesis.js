/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  return step([], n);
}

const step = (gs, n) => {
  let ans = [];

  if (n === 0) {
    ans.push('');
  } else {
    for (let i = 0; i < n; i++) {
      let ls = gs[i] || step(gs, i);
      for (let j = 0; j < ls.length; j++) {
        let rs = gs[n - i - 1] || step(gs, n - i - 1);
        for (let k = 0; k < rs.length; k++) {
          ans.push('(' + ls[j] + ')' + rs[k]);
        }
      }
    }
  }
  gs[n] = ans;

  return ans;
}
