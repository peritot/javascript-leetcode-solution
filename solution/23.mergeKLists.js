/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  let head = new ListNode(0);
  if (lists.length === 0) {
    return head.next;
  }

  head = lists[0];
  for (let i = 1; i < lists.length; i++) {
    head = mergeTwoLists(head, lists[i]);
  }

  return head;
}

const mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0);

  let h = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      h.next = l1;
      l1 = l1.next;
    } else {
      h.next = l2;
      l2 = l2.next;
    }
    h = h.next;
  }
  h.next = l1 !== null ? l1 : l2;

  return head.next;
}
