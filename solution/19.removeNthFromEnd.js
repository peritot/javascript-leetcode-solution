/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let p = head;
  let q = head;

  for (let i = 0; i < n; i++) {
    q = q.next;
  }
  if (q === null) {
    return p.next;
  }

  while (q.next !== null) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;

  return head;
}
