/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;

  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let x = j - i;
    let y = height[i] < height[j] ? height[i] : height[j];
    let area = x * y;
    max = max > area ? max : area;

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}
