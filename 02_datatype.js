"use strict" // treat all js code as newer version

// alert(3+3)// we using nodejs not browser

// 1. Number
let n = 123;
n = 12.345;
console.log(n);

// 2. String
let str = "Hello";
str = 'Single quotes are ok too';
console.log(typeof str);

// 3. Boolean
let isGreater = 4 > 1;
console.log(isGreater);

// 4. Null
let age = null;
console.log(age);

// 5. Undefined
let x;
console.log(x);

// 6. Object
let person = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.table( person);

//type of null is object in js
console.log(typeof null);

//type of undefined is undefined
console.log(typeof undefined);