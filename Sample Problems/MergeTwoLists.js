/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head1 = list1;
  let head2 = list2;

  let dummyHead = new ListNode();

  let current = dummyHead;

  while (head1 || head2) {
    if (head1 === null) {
      current.next = head2;
      return dummyHead.next;
    } else if (head2 === null) {
      current.next = head1;
      return dummyHead.next;
    } else if (head1.val < head2.val) {
      current.next = new ListNode(head1.val);
      head1 = head1.next;
    } else {
      current.next = new ListNode(head2.val);
      head2 = head2.next;
    }
    current = current.next;
  }
  return dummyHead.next;
};
