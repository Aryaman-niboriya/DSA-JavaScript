if(true){
    let a =10
    const b = 12
    var c = 11
    d = 12
}console.log(c);
console.log(d);
//var ko curly braces me define krne ke baad bhi ye bahar access 
// ho rha he error he nhi hona chahiye jaise let or const nhi hote he 
//or jb hum koi bhi var let const mese kuch nhi dete he phir bhi 
// wo global variable ban jata he or usko hum kahi bhi access kr skte he


//block scop vs global scop
let one = 1;
if(true){
    let one = 2;
    console.log("inner vallue",one);// we can access the variable one inside the block scope
   
}
console.log("outer value",one);// we can access the variable one outside the block scope