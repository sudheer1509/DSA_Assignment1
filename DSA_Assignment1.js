//  Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

const findAllPairs = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log(arr[i], arr[j]);
      }
    }
  }
};
findAllPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, -1], 6);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

const reverseArray = (arr) => {
  console.log(arr.reverse());
};
reverseArray([1, 2, 34, 58, 5, 256, 7, 8, 999, -1]);

// Q3. Write a program to check if two strings are a rotation of each other?
const rotationStrings = (str1, str2) => {
  if ((str1 + str1).indexOf(str2) != -1) {
    console.log("Strings are rotations of each other");
  } else {
    console.log("Strings are not rotations of each other");
  }
};
rotationStrings("AACD", "ACDA");

// Q4. Write a program to print the first non-repeated character from a string?
const firstNonRepetatedChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    var count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i > j) {
        break;
      }
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      console.log(
        `First non-repeated character from the string "${str}" is ${str[i]}`
      );
      break;
    }
  }
};
firstNonRepetatedChar("ememempre hello");

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log(
    "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
  );
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

var n = 5; // Number of disks
towerOfHanoi(n, "A", "C", "B");

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp) {
  let s = [];
  let length = post_exp.length;
  // reading from right to left ABC/-AK/L-*
  for (let i = 0; i < length; i++) {
    // check if symbol is operator
    if (isOperator(post_exp[i])) {
      // Pop two operands from stack
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();
      // concat the operands and operator
      let temp = post_exp[i] + op2 + op1;
      // Push String temp back to stack
      s.push(temp);
    }
    // if symbol is an operand
    else {
      // Push the operand to the stack
      s.push(post_exp[i] + "");
    }
  }
  let ans = "";
  while (s.length > 0) ans += s.pop();
  return ans;
}
let post_exp = "ABC/-AK/L-*";
console.log("Prefix : " + postToPre(post_exp));

// Q7. Write a program to convert prefix expression to infix expression.
function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
  return false;
}

// Convert prefix to Infix expression
function convert(str) {
  let stack = [];
  let l = str.length;
  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];
    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();
      // Concat the operands and operator
      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      // To make character to string
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}
let exp = "*-A/BC-/AKL";
console.log("Infix : " + convert(exp));

// Q8. Write a program to check if all the brackets are closed in a given code snippet.
let stack = [];
function push(newItem) {
  stack.push(newItem);
}
function pop() {
  stack.pop();
}
function peek() {
  return stack[stack.length - 1];
}
function getBracketOpening(bracket) {
  switch (bracket) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return "";
  }
}
function isBracketOpening(input) {
  const brackets = ["(", "[", "{"];
  return brackets.includes(input);
}
function checkBrackets(input) {
  for (let counter = 0; counter < input.length; counter++) {
    const current = input[counter];
    const isOpenBracket = isBracketOpening(current);
    const peekOfStack = peek();
    const openingOfCurrentBracket = getBracketOpening(current);
    if (peekOfStack === openingOfCurrentBracket) {
      pop();
    } else {
      if (isOpenBracket) {
        push(current);
      }
    }
  }
  if (stack.length === 0) {
    console.log("The input string has proper opening and closing");
  } else {
    console.log("The input string does not have proper opening and closing");
  }
}
checkBrackets("a*(b+c)*[d-(e*f)][(a)]");
checkBrackets("()[]");
checkBrackets("a+(b[{(c*d)+e+(f/g}])");

// Q9. Write a program to reverse a stack.
const reverseStack = (st) => {
  const stack = [];
  len = st.length;
  while (len > 0) {
    stack.push(st.pop());
    len--;
  }
  console.log("Reversed stack is ", stack);
};
reverseStack([1, 2, 3, 4, 5]);

// Q10. Write a program to find the smallest number using a stack.
const searchSmallestNumber = (st) => {
  len = st.length;
  var sm;
  for (i = 0; i < len; i++) {
    if (i == 0) {
      sm = st[i];
    }
    if (i > 0 && st[i] < sm) {
      sm = st[i];
    }
  }
  console.log("Smallest number in the stack is ", sm);
};
searchSmallestNumber([2, 5, 1, 3, 4, 96, 45, -2, 66, 64]);
