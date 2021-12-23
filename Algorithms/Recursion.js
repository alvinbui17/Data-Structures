// a way of solving a problem by having a function call itself

const factorial = (n) => {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
};

// find nth number in fib sequence
const fib = (n) => {
  if (n >= 3) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return 1;
  }
};

// NOT recursive but more dynamic
const fib_bottom_up = (n) => {
  if (n == 1 || n == 2) {
    return 1;
  }

  let bottom_up = [];

  bottom_up[1] = 1;
  bottom_up[2] = 1;

  for (let i = 3; i <= n; i++) {
    bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
  }

  return bottom_up[n];
};

// look at frog jumping problem

// console.log(factorial(4));

console.log(fib_bottom_up(1000));

// console.log(fib_bottom_up(1000));
