import countries from "./countries .js";

import  {webTechs } from "./webtech.js";

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let word = /[.,]/gi;
console.log(text.replace(word));  
console.log(text.split());
console.log(text.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(3,1);
console.log(shoppingCart);
shoppingCart[4] = "Green Tea ";
console.log(shoppingCart);

let access1 = countries.includes("Ethiopia");
console.log(access1);

let access2 = webTechs.includes("Sass");
console.log(access2);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)