// for of loop

const arr = ["ram","raha","shyam"];
for(const num of arr){
    console.log(num);
}

// for in loop
const person = {
    name:"aryaman",
    age:20,
    city:"rajkot"
}
for(const key in person){
    console.log(`${key} : ${person[key]}`);
}

// map method
const numbers = [1,2,3,4,5];
const squared = numbers.map(num => num*num);
console.log(squared);