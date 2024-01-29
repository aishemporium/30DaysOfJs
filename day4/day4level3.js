let month = prompt("Enter a month");
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    daysInMonth = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    daysInMonth = 30;
    break;
  case "febuary":
    daysInMonth = 28;
    break;
  default:
    daysInMonth = "Invalid month";
}

console.log(month + " has " + daysInMonth + " days.");
