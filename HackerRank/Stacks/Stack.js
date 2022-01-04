const equalStacks = (h1, h2, h3) => {
  // CUMULATIVE STACKS
  // [1,2,3] --> [1,3,5]
  // pop stack with largest sum until all sums are equal or until a stack is empty

  let s1 = [h1.pop()];
  let s2 = [h2.pop()];
  let s3 = [h3.pop()];

  while (h1.length) {
    let previous = s1[s1.length - 1];
    s1.push(h1.pop() + previous);
  }

  while (h2.length) {
    let previous = s2[s2.length - 1];
    s2.push(h2.pop() + previous);
  }

  while (h3.length) {
    let previous = s3[s3.length - 1];
    s3.push(h3.pop() + previous);
  }

  if (
    s1[s1.length - 1] === s2[s2.length - 1] &&
    s2[s2.length - 1] === s3[s3.length - 1]
  ) {
    return s1.pop();
  }

  while (s1.length && s2.length && s3.length) {
    if (
      s1[s1.length - 1] === s2[s2.length - 1] &&
      s2[s2.length - 1] === s3[s3.length - 1]
    ) {
      return s1.pop();
    }

    if (
      s1[s1.length - 1] >= s2[s2.length - 1] &&
      s1[s1.length - 1] >= s3[s3.length - 1]
    ) {
      s1.pop();
    } else if (
      s2[s2.length - 1] >= s1[s1.length - 1] &&
      s2[s2.length - 1] >= s3[s3.length - 1]
    ) {
      s2.pop();
    } else if (
      s3[s3.length - 1] >= s1[s1.length - 1] &&
      s3[s3.length - 1] >= s2[s2.length - 1]
    ) {
      s3.pop();
    }
  }
  return 0;
};

const balancedBrackets = (s) => {
  let n = -1;
  while (s.length != n) {
    n = s.length;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  if (s.length == 0) return "YES";
  else return "NO";
};

const twoStacks = (maxSum, a, b) => {
  let sum_total = 0;
  let count_a = 0;
  let count_b = 0;
  let result = 0;

  // max out first stack
  for (let i = 0; i < a.length; i++) {
    if (a[i] + sum_total > maxSum) {
      break;
    }
    sum_total += a[i];
    count_a++;
  }

  result = count_a;

  // add a
  for (let i = 0; i < b.length; i++) {
    sum_total += b[i];
    count_b++;

    while (sum_total > maxSum && count_a > 0) {
      sum_total -= a[count_a - 1];
      count_a--;
    }

    result = sum_total <= maxSum ? Math.max(count_a + count_b, result) : result;
  }

  return result;
};

// largest rectangle in a histogram
const largestAreaInHistogram = (arr) => {
  // height * (current index - start index)
  let maxArea = 0;
  let stack = [];

  let popped;
  let potentialMaxArea;

  // [index, height]
  stack.push([0, arr[0]]);

  for (let i = 1; i < arr.length; i++) {
    // if next bar is same or taller, push to stack
    if (arr[i] >= stack[stack.length - 1][1]) {
      stack.push([i, arr[i]]);
    } else {
      // pop the stack and calculate max areas until arr[i] is >= the top of stack
      while (stack.length && arr[i] < stack[stack.length - 1][1]) {
        popped = stack.pop();
        console.log("popped", popped);

        potentialMaxArea = popped[1] * (i - popped[0]);
        if (potentialMaxArea > maxArea) {
          maxArea = potentialMaxArea;
        }
      }

      stack.push([popped[0], arr[i]]);
    }
  }

  // once you reach the end of the list and there are still items in stack, calculate maxAreas for each height * (arr.length - index)

  while (stack.length) {
    popped = stack.pop();
    potentialMaxArea = popped[1] * (arr.length - popped[0]);

    if (potentialMaxArea > maxArea) {
      maxArea = potentialMaxArea;
    }
  }

  console.log(stack, maxArea);
  return maxArea;
};

largestAreaInHistogram([2, 1, 5, 6, 2, 3]);

// twoStacks(10, [3, 4, 5], [1, 2, 3, 6]);
