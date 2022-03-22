/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// merge sort
// time = O(nlogk)

// var mergeKLists = function (lists) {
//   if (lists === null || lists.length === 0) {
//     return null;
//   }

//   while (lists.length > 1) {
//     let mergedList = [];

//     for (let i = 0; i < lists.length; i += 2) {
//       let list1 = lists[i];
//       let list2 = i + 1 < lists.length ? lists[i + 1] : null;
//       mergedList.push(mergeLists(list1, list2));
//     }
//     // now we want to merge the mergedLists so this keeps the while loop going
//     lists = mergedList;
//   }
//   // when the final merged list is ready, return
//   return lists[0];
// };

// const mergeLists = (list1, list2) => {
//   let dummyHead = new ListNode();
//   let current1 = list1;
//   let current2 = list2;

//   if (current1 === null) {
//     return current2;
//   }

//   if (current2 === null) {
//     return current1;
//   }

//   let currentNode = dummyHead;

//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       currentNode.next = current1;
//       current1 = current1.next;
//       currentNode = currentNode.next;
//     } else {
//       currentNode.next = current2;
//       current2 = current2.next;
//       currentNode = currentNode.next;
//     }
//   }

//   if (current1 === null) {
//     currentNode.next = current2;
//   }

//   if (current2 === null) {
//     currentNode.next = current1;
//   }
//   return dummyHead.next;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function (list1, list2) {
  let head1 = list1;
  let head2 = list2;

  if (head1 === undefined) {
    return head2;
  }

  if (head2 === undefined) {
    return head1;
  }

  let dummyHead = new ListNode();

  let current = dummyHead;

  while (head1 || head2) {
    if (head1 === null) {
      current.next = new ListNode(head2.val);
      head2 = head2.next;
    } else if (head2 === null) {
      current.next = new ListNode(head1.val);
      head1 = head1.next;
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

var mergeKLists = function (lists) {
  if (lists === null || lists.length === 0) {
    return null;
  }

  let mergedList = lists;

  let list1, list2;
  while (mergedList.length >= 2) {
    list1 = mergedList.shift();
    list2 = mergedList.shift();

    let merged = mergeTwoLists(list1, list2);
    mergedList.push(merged);
  }
  return mergedList[0];
};
