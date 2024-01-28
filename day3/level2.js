// let base = prompt("Enter the base of the triangle");
// let height = prompt("Enter the height the a triangle");
// let calcArea = (0.5 * +(base * height));
// console.log(`The area of the triangle is ${calcArea}`);

// let sideA = +prompt("Enter side A of the Triangle");
// let sideB = +prompt("Enter side B of the Triangle");
// let sideC = +prompt("Enter side C of the Triangle");
// let calcPerimeter = (sideA + sideB + sideC);
// console.log(`The perimeter of the triangle is ${calcPerimeter}`);

// let length = +(prompt("Enter the value for the length of a rctangle:"));
// let width = +(prompt("Enter the value for the width of a rctangle:"));
// let periOfRect = 2 * (length + width);
// console.log(`The perimeter of the triangle is ${periOfRect}`);

// const pi = 3.14;
// let radius = +prompt("Enter the radius of a circle");
// const areaOfCircle = pi * (radius * radius);
// const circumferenceOfACircle = 2 * (pi * radius);
// console.log(`The area of a circle is ${areaOfCircle}; The circumference of a circle is ${circumferenceOfACircle}`);

// let userWorkHour = +prompt("Enter your work hour");
// let userWorkRate = +prompt("Enter your work rate every hour");
// let userWeeklyEarning = +(userWorkHour * userWorkRate);
// console.log(`Your weekly earning is ${userWeeklyEarning}`);

// let lengthYourName = "Aishaty";{
// lengthYourName.length > 7 ? console.log('Your name is long') : console.log('Your name is short')};

// let yourFirstName = 'Asabeneh';
// let yourLastName = 'Yetayeh';{
// firstName.length > yourLastName.length ? console.log('Your first name, Asabeneh is shorter than your family name, Yetayeh') : console.log('Your first name, Asabeneh is longer than your family name, Yetayeh')};

// let myAge = 250;
// let yourAge = 25;
// console.log(`I am ${myAge - yourAge} years older than you`);

// let userAge_ = +(prompt("Enter your age:"));
// if (userAge_ >= 18) { 
//     console.log(`You are ${userAge_}. You are old enough to drive`);
// } else {
//     console.log(`You are ${userAge_} years old, you will be allowed to drive after ${18 - userAge_} years`)
// };

// let yearsLived = +(prompt("Enter numbers of years you live"));
// console.log(`You lived ${yearsLived * 31536000} seconds.`);


const date_ = new Date();
let mins = date_.getMinutes();
let hours = date_.getHours();
let Year_ = date_.getFullYear();
let month = date_.getMonth();
let Date_ = date_.getDate();

console.log(`${Year_}/${month + 1}/${Date_} ${hours}:${mins}`);
console.log(`${Date_}/${month + 1}/${Year_} ${hours}:${mins}`);
console.log(`${month + 1}/${Date_}/${Year_} ${hours}:${mins}`);