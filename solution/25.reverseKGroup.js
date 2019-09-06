/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  let start = null;
  let prev = null;
  let curr = head;
  let i = 0;

  while (curr !== null && i < k) {
    curr = curr.next;
    i++;
  }
  if (i !== k) {
    return head;
  }

  curr = head;
  i = 0;
  while (curr !== null && i < k) {
    start = curr.next;
    curr.next = prev;
    prev = curr;
    curr = start;
    i++;
  }

  if (start !== null) {
    head.next = reverseKGroup(start, k);
  }

  return prev;
}
