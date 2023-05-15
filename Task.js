// First one
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));

// converting mintues to seconds
function time(min) {
  return min * 60;
}
console.log(min(10));

// increment
function minute(a) {
  return ++a;
  console.log(a);
}
console.log(minute(2));

// converting age years into age days
function age(a) {
  return a * 365;
}
console.log(age(25));

// voltage and current and returns the calculated power.
function add(voltage, current) {
  var power = voltage * current;
  return power;
}
console.log(add(12, 3));
// returns the string "something" joined with a space " " and the given argument a.
function string(a) {
  return "something" + a;
}
console.log(a(" "));
//  function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function boolean(a, b) {
  if (a == 10 || a + b == 10) {
    console.log(true);
  } else {
    0;
    console.log(false);
  }
  return true;
}
console.log(boolean(10, 5));
// function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
var a = "lavanya";
var b = "mundru";
if (a.length == b.length) {
  console.log(true);
} else {
  console.log(false);
}

function add(a, b) {
  if (a.length == b.length) {
    console.log(true);
  } else {
    console.log(false);
  }
  return;
}
console.log(add("lavanya", "mundru"));

//  create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function toggleCase(str) {
  var toggledStr = "";
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (char === char.toLowerCase()) {
      toggledStr += char.toUpperCase();
    } else {
      toggledStr += char.toLowerCase();
    }
  }
  return toggledStr;
}

console.log(toggleCase("hEllO WoRLd"));

// Function that will take one parameter and return type of the data

function add(a) {
  return typeof a;
}
console.log(add(10));
// greatest

function Greatest(a, b, c) {
  const greatest = a > b && a > c ? a : b > a && b > c ? b : c;

  return greatest;
}
console.log(Greatest(10, 20, 15));
function greatest(a, b, c) {
  let z = a;
  if (a >= b && a >= c) {
    z = a;
  } else if (b >= c && c >= a) {
    z = b;
  } else {
    z = c;
  }
  return z;
}
console.log(greatest(30, 3, 5));

// factorial
function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  }

  return a * factorial(a - 1);
}
console.log(factorial(5));

//   vowels and consonants count

let str = "LavanyaMundru";

let vowelscount = 0;
let consonantscount = 0;

for (i = 0; i <= str.length; i++) {
  var char = str[i];
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelscount++;
  } else if (char >= "a" && char <= "z") {
    consonantscount++;
  } else {
    nothing = char;
  }
}

console.log("vowels=" + vowelscount);
console.log("consonants=" + consonantscount);
// vowels count

let str = "LavanyaMundru";

let vowelscount = 0;

for (i = 0; i <= str.length; i++) {
  var char = str[i];
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelscount++;
  } else {
    nothing = char;
  }
}

console.log("vowels=" + vowelscount);
