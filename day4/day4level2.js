let studentGrade = Number(prompt("Enter your score:"));
if (studentGrade >= 80 && studentGrade <= 100) {
  console.log("Your grade is A");
} else if (studentGrade >= 70 && studentGrade < 90) {
  console.log("Your grade is B");
} else if (studentGrade >= 60 && studentGrade < 70) {
  console.log("Your grade is C");
} else if (studentGrade >= 50 && studentGrade < 60) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
};

let month = prompt("Enter the month: ");

if (month === "September" || month === "October" || month === "November") {
  console.log("The season is Autumn.");
} else if (month === "December" || month === "January" || month === "February") {
  console.log("The season is Winter.");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("The season is Spring.");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("The season is Summer.");
} else {
  console.log("The month you entered is invalid.");
};

let day = prompt("What is the day today?")
if (day == "saturday" || day == "sunday") {
    console.log(`${day} is a weekend`);
} else{
    console.log(`${day} is a working day`);
};