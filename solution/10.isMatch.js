/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  let r = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== '*') {
      r.push({
        value: p[i],
        repeat: false,
      });
    } else {
      r[r.length - 1].repeat = true;
    }
  }

  let m = [];
  for (let i = 0; i <= s.length; i++) {
    m[i] = [];
    for (let j = 0; j <= r.length; j++) {
      m[i][j] = null;
    }
  }
  return step(m, s, r, 0, 0);
}

const step = (m, s, r, i, j) => {
  if (m[i][j] !== null) {
    return m[i][j] === true;
  }

  let ans = null;
  if (j === r.length) {
    ans = i === s.length;
  } else {
    let match = i < s.length && (r[j].value === s[i] || r[j].value === '.');
    if (j < r.length && r[j].repeat === true) {
      ans = step(m, s, r, i, j + 1) || (match && step(m, s, r, i + 1, j));
    } else {
      ans = match && step(m, s, r, i + 1, j + 1);
    }
  }
  m[i][j] = ans ? true : false;

  return ans;
}
