/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }

  let ans = [];
  for (let n = 0; n < numRows; n++) {
    let i = 0;
    let isEnd = false;
    while (!isEnd) {
      let start = i++ * 2 * (numRows - 1);
      let end = start + 2 * (numRows - 1);

      isEnd = put(s, ans, start + n);
      if (n > 0 && n < numRows - 1) {
        isEnd = put(s, ans, end - n);
      }
    }
  }

  return ans.join('');
}

const put = (s, ans, index) => {
  if (index < s.length) {
    ans.push(s[index]);
  } else {
    return true;
  }
  return false;
}
