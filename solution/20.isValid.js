/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let a = 0;
  let b = 0;
  let c = 0;
  let ai = [];
  let bi = [];
  let ci = [];
  let nums = [];
  let index;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        a++;
        ai.push(i);
        break;
      case '[':
        b++;
        bi.push(i);
        break;
      case '{':
        c++;
        ci.push(i);
        break;
      case ')':
        a--;
        index = ai.pop();
        if (index > 0 && (nums[index].b !== b || nums[index].c !== c)) {
          return false;
        }
        break;
      case ']':
        b--;
        index = bi.pop();
        if (index > 0 && (nums[index].a !== a || nums[index].c !== c)) {
          return false;
        }
        break;
      case '}':
        c--;
        index = ci.pop();
        if (index > 0 && (nums[index].a !== a || nums[index].b !== b)) {
          return false;
        }
        break;
      default:
        break;
    }
    if (a < 0 || b < 0 || c < 0) {
      return false;
    }
    nums.push({
      a,
      b,
      c
    });
  }
  if (a !== 0 || b !== 0 || c !== 0) {
    return false;
  }

  return true;
}
