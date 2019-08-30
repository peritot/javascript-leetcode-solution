/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let x = j - i;
      let y = height[i] < height[j] ? height[i] : height[j];
      let area = x * y;
      max = max > area ? max : area;
    }
  }

  return max;
}
