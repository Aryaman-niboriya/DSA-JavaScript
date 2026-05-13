//Array

const myarr = [1,2,3,4,5,6,7,8,9,0,"aryaman"];
console.log(myarr);
console.log(myarr.length)// it is used to find the length of the array
console.log(myarr[6]);
myarr.push(12);
console.log(myarr);// it add the element at the end of the array
myarr.pop();// it remove the element at the end of the array
console.log(myarr);
myarr.unshift(5);// it add the element at the beginning of the array
console.log(myarr);
myarr.shift();// it remove the element at the beginning of the array
console.log(myarr);

console.log(myarr.includes("aryaman"));// it is used to check whether the element is present in the array or not
console.log(myarr.indexOf("aryaman"));// it is used to find the index of the element in the array

const newarr = myarr.join("=");// it is used to join the elements of the array with a separator
console.log(newarr); 
// slice vs splice
//in slice method it is used to extract a portion of the array and it does not modify the original array
const slicedarr = myarr.slice(2,5);
console.log(slicedarr);
console.log(myarr);
// in splice method it is used to add or remove elements from the array and it modifies the original array
myarr.splice(2,3,10,11,12);
console.log(myarr);

//spread operator in js it is used to spread the elements of the array
const marvel_heroes = ["ironman","spiderman","thor"];
const dc_heroes = ["superman","batman","flash"];
console.log(...marvel_heroes,...dc_heroes);

//flat method in js it is used to flatten the array
const arr1 = [1,2,3,[4,5,6],[7,8,9]];
const flatarr = arr1.flat();
console.log(flatarr);

//isarray method in js it is used to check whether the variable is an array or not
console.log(Array.isArray(arr1));
console.log(Array.isArray(myarr));

//from method in js it is used to create an array from a string
const str = "hello";
const arrfromstr = Array.from(str);
console.log(arrfromstr);

//of method in js it is used to create an array from a list of arguments
const arrfromargs = Array.of(1,2,3,4,5);
console.log(arrfromargs);