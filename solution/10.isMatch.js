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

  return step(s, r, 0, 0);
}

const step = (s, r, i, j) => {
  if (j === r.length) {
    return i === s.length;
  }

  if (j < r.length && r[j].repeat === true) {
    if (i < s.length && (r[j].value === '.' || s[i] === r[j].value)) {
      return step(s, r, i + 1, j) || step(s, r, i, j + 1);
    } else {
      return step(s, r, i, j + 1);
    }
  }
  if (i < s.length && (r[j].value === '.' || s[i] === r[j].value)) {
    return step(s, r, i + 1, j + 1);
  }
  return false;
}