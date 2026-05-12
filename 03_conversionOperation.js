let score = "33h";
let value = '99';
console.log( typeof score, typeof value);

// Explicit conversion
let convertscore = Number(score);
console.log(typeof convertscore );
console.log(convertscore);

//"33" =>33
//"33h" => NaN
// true => 1 ; false => 0

let isloggedin = "String"

let booleanIsLoggedIn = Boolean(isloggedin)
console.log(booleanIsLoggedIn)


// number to string convertion
let ssc = 100;
let ssr = String(ssc);
console.log(typeof ssr);


//************** operations ****************

console.log(1 + 2); // 3
console.log("1" + "2"); // "12"
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"

console.log(1 - 2); // -1
console.log("1" - "2"); // -1
console.log("1" - 2); // -1
console.log(1 - "2"); // -1

console.log(1 * 2); // 2
console.log("1" * "2"); // 2
console.log("1" * 2); // 2
console.log(1 * "2"); // 2

console.log(1 / 2); // 0.5
console.log("1" / "2"); // 0.5
console.log("1" / 2); // 0.5
console.log(1 / "2"); // 0.5


let gamecounter = 100;
++gamecounter;
console.log(gamecounter);

//comparison operators

console.log(null<0);// false
console.log(null>0);// false
console.log(null==0);// false
console.log(null===0);// false

console.log(undefined<0);// false
console.log(undefined>0);// false
console.log(undefined==0);// false
console.log(undefined===0);// false

