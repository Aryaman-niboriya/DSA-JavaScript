//singleton
//object literal
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "aryaman@gmail.com"
}
//there are two ways to access the properties of the object
console.log(person.city);// dot notation
console.log(person["email"]);// bracket notation

person.age=19;// we can change the value of the property of the object
console.log(person);

Object.freeze(person);// we can freeze the object to prevent any changes to the object
person.age=20;// this will not change the value of the property of the object
console.log(person);