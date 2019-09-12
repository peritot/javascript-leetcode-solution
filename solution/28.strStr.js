/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let next = getNext(needle);
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if (j === needle.length) {
    return i - j;
  }
  return -1;
}

const getNext = (s) => {
  let next = [-1];

  let i = 0;
  let j = -1;
  while (i < s.length - 1) {
    if (j === -1 || s[i] === s[j]) {
      i++;
      j++;
      next[i] = j;
    } else {
      j = next[j];
    }
  }

  return next;
}
