const score =400;
const balance = new Number (100);
//number to string methhod and also check length method of number
console.log(balance.toString.length);
//to fixed method in js basicaly it add .0000 after the number
console.log(balance.toFixed(4));
// precision method in js it is used to set the number of digits after the decimal point
const pp= 112.6789;
console.log(pp.toPrecision(4));
// tolocaleString method in js it is used to convert a number to a string and also it is used to format the number according to the locale
const num = 10000000000;
console.log(num.toLocaleString("en-IN"));

//********************* Maths ********************* */

//abs method in math js it is used to return the absolute value of a number
console.log(Math.abs(-6)); 
console.log(Math.round(2.8)); 
console.log(Math.ceil(2.1)); 
console.log(Math.floor(2.9));
console.log(Math.min(2,3,4,5)); 
console.log(Math.max(2,3,4,5)); 
console.log(Math.random()); // it is used to generate a random number between 0 and 1