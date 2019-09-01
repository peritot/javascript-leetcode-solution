/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  let ans = [];

  if (digits.length === 0) {
    return ans;
  }

  step(ans, '', digits.toString());
  return ans;
}

const dsm = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

const step = (ans, combination, next) => {
  if (next.length === 0) {
    ans.push(combination);
  } else {
    let ds = dsm[next[0]];
    for (let i = 0; i < ds.length; i++) {
      step(ans, combination + ds[i], next.substr(1));
    }
  }
}
