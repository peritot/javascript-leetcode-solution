/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let pre = dummy;
  while (pre.next !== null && pre.next.next !== null) {
    let start = pre.next;
    let end = pre.next.next;

    pre.next = end;
    start.next = end.next;
    end.next = start;

    pre = start;
  }

  return dummy.next;
}
