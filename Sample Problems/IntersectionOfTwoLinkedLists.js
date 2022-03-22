/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const length = (head) => {
    let len = 0;
    while (head) {
      len++;
      head = head.next;
    }
    return len;
  };

  if (length(headA) < length(headB)) {
    let diff = length(headB) - length(headA);
    while (diff) {
      headB = headB.next;
      diff--;
    }
  } else if (length(headA) > length(headB)) {
    let diff = length(headA) - length(headB);
    while (diff) {
      headA = headA.next;
      diff--;
    }
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};
