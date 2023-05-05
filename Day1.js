// Greatest Numbers by using If else

var a = 1;
var b = 3;
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}
// By using if else if check weekdays
var dayNumber = prompt("Enter the number:");
let dayName;
if (dayNumber == 1) {
  dayName = "Monday";
} else if (dayNumber == 2) {
  dayName = "Tuesday";
} else if (dayNumber == 3) {
  dayName = "Wednesday";
} else if (dayNumber == 4) {
  dayName = "Thursday";
} else if (dayNumber == 5) {
  dayName = "Friday";
} else if (dayNumber == 6) {
  dayName = "saturday";
} else if (dayNumber == 7) {
  dayName = "sunday";
} else {
  console.log("Nothing to show");
}
alert(dayName);
// By using switch case check weekdays
var dayNumber = prompt("Enter the number:");
let daName;
switch (dayNumber) {
  case 0:
    daName = "Monday";
    break;
  case 1:
    daName = "Tuesday";
    break;
  case 2:
    daName = "Wednesday";
    break;
  case 3:
    daName = "Thursday";
    break;
  case 4:
    daName = "Friday";
    break;
  case 5:
    daName = "Saturday";
    break;
  case 6:
    daName = "Sunday";
    break;
  default:
    daName("Nothing to show");
}
alert(daName);
