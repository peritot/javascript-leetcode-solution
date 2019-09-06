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
  let dummy = new ListNode(0);

  step(dummy, head, k);

  return dummy.next;
}

const step = (start, end, k) => {
  let i = 0;
  let curr = end;
  while (curr !== null) {
    curr = curr.next;
    i++;
  }
  if (i < k) {
    return addList(start, end);
  } else {
    i = 0;
    let prev = null;
    curr = end;
    while (i < k) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;

      i++;
    }
    return step(addList(start, prev), curr, k);
  }
}

const addList = (l1, l2) => {
  let head = l1;

  while (l1.next !== null) {
    l1 = l1.next;
  }
  l1.next = l2;

  return head;
}
