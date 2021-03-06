var message;

console.log(message); // undefined
// console.log(counter); // ReferenceError: counter is not defined

// var is used in the older versions of JavaScript

// let is the new way of declaring variables starting ES6 (ES2015).
let fullName = "Praveen Oruganti";
console.log(fullName); // Praveen Oruganti
let age = 35;
console.log(age); // 35
let isMarried = true;
console.log(isMarried); // true

let admin, name; // can declare two variables at once
name = "Praveen";
admin = name;
console.log(admin); // Praveen

let weather = "rainy";
weather = "sunny";
console.log(weather); // sunny

var camelCase = "lowercase word, then uppercase";
var dinner2Go = "pizza";
var I_AM_HUNGRY = true;
var _Hello_ = "what a nice greeting";
var $_$ = "money eyes";

// Declaring constant
const PI = 3.14;
console.log(PI); // 3.14

// Trying to reassign
// PI = 10; // error

//valid
let a = "hello";
let _a = "hello";
let $a = "hello";

//invalid
//let 1a = 'hello'; // this gives an error

// JavaScript is case-sensitive. So y and Y are different variables.
let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5

// Keywords cannot be used as variable names

//invalid
//let new = 5; // Error! new is a keyword.