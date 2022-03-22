var addTwoNumbers = function (l1, l2) {
  let newHead = new ListNode();
  let current = newHead;

  let carry = 0;
  let sum;

  while (l1 || l2) {
    if (l1 && l2) {
      sum = l1.val + l2.val;

      if (sum + carry > 9) {
        sum = sum - 10;
        current.val = sum + carry;
        carry = 1;
      } else {
        current.val = sum + carry;
        carry = 0;
      }

      if (l1.next || l2.next) {
        current.next = new ListNode();
        current = current.next;
      }

      l1 = l1.next;
      l2 = l2.next;
    }

    if (l1 && l2 === null) {
      sum = l1.val;

      if (sum + carry > 9) {
        current.val = sum + carry - 10;
        carry = 1;
      } else {
        current.val = sum + carry;
        carry = 0;
      }

      if (l1.next) {
        current.next = new ListNode();
        current = current.next;
      }

      l1 = l1.next;
    }

    if (l1 === null && l2) {
      sum = l2.val;

      if (sum + carry > 9) {
        current.val = sum + carry - 10;
        carry = 1;
      } else {
        current.val = sum + carry;
        carry = 0;
      }

      if (l2.next) {
        current.next = new ListNode();
        current = current.next;
      }

      l2 = l2.next;
    }

    if ((l1 === null) & (l2 === null) && carry === 1) {
      current.next = new ListNode();
      current = current.next;
      current.val = carry;
    }
  }

  return newHead;
};

var addTwoNumbersV2 = function (l1, l2) {
  let newHead = new ListNode();
  let current = newHead;

  let carry = 0;

  while (l1 || l2) {
    let int1 = l1 ? l1.val : 0;
    let int2 = l2 ? l2.val : 0;

    if (int1 + int2 + carry > 9) {
      current.next = new ListNode(int1 + int2 + carry - 10);
      carry = 1;
    } else {
      current.next = new ListNode(int1 + int2 + carry);
      carry = 0;
    }

    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    if ((l1 === null) & (l2 === null) && carry === 1) {
      current.next = new ListNode();
      current = current.next;
      current.val = carry;
    }
  }

  return newHead.next;
};
