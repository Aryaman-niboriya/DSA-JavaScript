// falsy vs truthy in js

//falsy values in js
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

//truthy values in js
// 1. true
// 2. any non-zero number
// 3. any non-empty string
// 4. any object
// 5. any array

//example of falsy values
if(false){
    console.log("this is falsy value");
}
if(0){
    console.log("this is falsy value");
}
if(""){
    console.log("this is falsy value");
}
if(null){
    console.log("this is falsy value");
}
if(undefined){
    console.log("this is falsy value");
}
if(NaN){
    console.log("this is falsy value");
}

//example of truthy values
if(true){
    console.log("this is truthy value");
}
if(1){
    console.log("this is truthy value");
}
if("hello"){
    console.log("this is truthy value");
}
if({}){
    console.log("this is truthy value");
}
if([]){
    console.log("this is truthy value");
}
if(function(){}){
    console.log("this is truthy value");
}
if("false"){
    console.log("this is truthy value");
}
if("0"){
    console.log("this is truthy value");
}
if(" "){
    console.log("this is truthy value");
}
if("null"){
    console.log("this is truthy value");
}
if("undefined"){
    console.log("this is truthy value");
}