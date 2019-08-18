/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const nums = [];

  let i = 0;
  let j = 0;
  let a;
  let b;
  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length) {
      a = nums1[i];
    } else {
      a = Number.MAX_VALUE;
    }
    if (j < nums2.length) {
      b = nums2[j];
    } else {
      b = Number.MAX_VALUE;
    }
    if (a < b) {
      nums.push(a);
      i++;
    } else {
      nums.push(b);
      j++;
    }
  }

  let index = Math.floor(nums.length / 2);
  if (nums.length % 2 > 0) {
    return nums[index];
  } else {
    return (nums[index - 1] + nums[index]) / 2;
  }
}
