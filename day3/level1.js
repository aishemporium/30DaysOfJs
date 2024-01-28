let firstName = "Aishat";
let lastName = "Ibrahim";
let country = "Nigeria";
let city = "Ilorin";
let age = 20;
let isMarried = true;
let year = 2022;
console.log(typeof "Aishat");
console.log(typeof "Ibrahim");
console.log(typeof "Nigeria");
console.log(typeof "Ilorin");
console.log(typeof 20);
console.log(typeof true);
console.log(typeof 2022);

let type1 = '10';
let type2= 10;
console.log(type1 === type2);

let firstNum = '9.8';
let secondNum= parseInt(firstNum);
console.log(firstNum === secondNum);

let truthy1 = 10 > 7;
let truthy2= "Opeyemi";
console.log(truthy2);
let truthy3 = 50 == (+'50');
console.log(truthy3);
let faulsy1 = "";
let faulsy2;
let falsy3 = 2 > 10;
console.log(faulsy1);
console.log(faulsy2);
console.log(falsy3);

console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false)); 
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
let firstWord = "Dragon";
let secondWord = "Python"
console.log(!((firstWord) + (secondWord).includes("on")));

const now = new Date();
console.log(now.Date);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());