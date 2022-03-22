/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null;
  }

  let curr = head;

  let numOfAdvancesToNodeBeforeNodeToRemove = length(head) - n - 1;

  // if node to remove is the head
  if (numOfAdvancesToNodeBeforeNodeToRemove === -1) {
    curr = curr.next;
    return curr;
  }

  // advance to node before the one to remove
  while (numOfAdvancesToNodeBeforeNodeToRemove) {
    curr = curr.next;
    numOfAdvancesToNodeBeforeNodeToRemove--;
  }

  let nodeToBeRemoved = curr.next;
  curr.next = nodeToBeRemoved.next;

  return head;
};

const length = (head) => {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};
