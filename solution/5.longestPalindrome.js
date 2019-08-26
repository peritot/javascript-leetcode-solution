/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let lo = expand(s, i, i);
    let le = expand(s, i, i + 1);
    let loe = lo > le ? lo : le;
    if (loe > end - start) {
      if (loe % 2 === 0) {
        start = i + 1 - loe / 2;
        end = i + loe / 2;
      } else {
        start = i - (loe - 1) / 2;
        end = i + (loe - 1) / 2;
      }
    }
  }

  return s.substring(start, end + 1);
}

const expand = (s, l, r) => {
  let lr = 0;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    if (s[l] === s[r]) {
      lr = r - l + 1;
    }
    l--;
    r++;
  }
  return lr;
}
