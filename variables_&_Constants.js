// JavaScript Variables and Constants
// JavaScript Variables
// In programming, a variable is a container (storage area) to hold data. For example,

let num = 5;

// Here, num is a variable. It's storing 5.

// JavaScript Declare Variables
// In JavaScript, we use either var or let keyword to declare variables. For example,

// var x;
// let y;

// Here, x and y are variables.

// JavaScript Initialize Variables
// We use the assignment operator = to assign a value to a variable.

let x;
x = 5;

// Here, 5 is assigned to variable x.

// You can also initialize variables during its declaration.

let x = 5;
let  = 6;

// In JavaScript, it's possible to declare variables in a single statement.

// In JavaScript, it's possible to declare variables in a single statement.

let x = 5, y = 6, z = 7;
// If you use a variable without initializing it, it will have an undefined value.

let x; // x is the name of the variable

console.log(x); // undefined
// Here x is the variable name and since it does not contain any value, it will be undefined.
// 
// You will learn about undefined and other data types in the next tutorial in detail.

// Change the Value of Variables
// It's possible to change the value stored in the variable. For example,

// 5 is assigned to variable x
let x = 5; 
console.log(x); // 5

// vaue of variable x is changed
x = 3; 
console.log(x); // 3
// Run Code
// The value of a variable may vary. Hence, the name variable.

// Rules for Naming JavaScript Variables
// The rules for naming variables are:

// Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';
// Variable names cannot start with numbers. For example,
//invalid
Let 1a = 'hello'; // this gives an error
// JavaScript is case-sensitive. So y and Y are different variables. For example,
let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5
// Run Code
// Keywords cannot be used as variable names. For example,
//invalid
let new = 5; // Error! new is a keyword.