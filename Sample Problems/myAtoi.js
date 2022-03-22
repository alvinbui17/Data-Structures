// var myAtoi = function (s) {
//   let polarity = 1;
//   res = 0;

//   let string = s;
//   string = string.trim();
//   if (string[0] === "-" || string[0] === "+") {
//     if (string[0] === "-") {
//       polarity = -1;
//     }
//     string = string.substring(1);
//   }

//   console.log(string);
//   string.split("").forEach((element) => {
//     if (element === " ") {
//       return;
//     }
//     if (element - 0 >= 0 && element - 0 <= 9) {
//       res = res * 10 + parseInt(element);
//     }
//   });

//   return res * polarity;
// };

// var myAtoi = function (input) {
//   let sign = 1;
//   let result = 0;
//   let index = 0;
//   let n = input.length;

//   let INT_MAX = Math.pow(2, 31) - 1;
//   let INT_MIN = -Math.pow(2, 31);

//   // Discard all spaces from the beginning of the input string.
//   while (index < n && input[index] == " ") {
//     index++;
//   }

//   // sign = +1, if it's positive number, otherwise sign = -1.
//   if (index < n && input[index] == "+") {
//     sign = 1;
//     index++;
//   } else if (index < n && input[index] == "-") {
//     sign = -1;
//     index++;
//   }

//   // Traverse next digits of input and stop if it is not a digit.
//   // End of string is also non-digit character.
//   while (index < n && input[index] >= "0" && input[index] <= "9") {
//     let digit = input[index] - "0";

//     // Check overflow and underflow conditions.
//     if (
//       result > Math.floor(INT_MAX / 10) ||
//       (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
//     ) {
//       // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
//       return sign == 1 ? INT_MAX : INT_MIN;
//     }

//     // Append current digit to the result.
//     result = 10 * result + digit;
//     index++;
//   }

//   // We have formed a valid number without any overflow/underflow.
//   // Return it after multiplying it with its sign.
//   return sign * result;
// };

var myAtoi = function (s) {
  let max = 2 ** 31 - 1;
  let min = -1 * 2 ** 31;

  console.log(min, max);
  let string = s.trim();

  let polarity = 1;

  let res = 0;

  if (!string.length) {
    return 0;
  }

  if (string[0] === "-" || string[0] === "+") {
    if (string[0] === "-") {
      polarity = -1;
      console.log(string[0], "neg");
    }
    string = string.substring(1);
  }

  for (let element of string) {
    if (/\D/.test(element)) {
      return Math.max(min, Math.min(res * polarity, max));
    } else {
      res = res * 10 + parseInt(element);
    }
  }

  return Math.max(min, Math.min(res * polarity, max));
};

console.log(myAtoi("  -0012a42"));
