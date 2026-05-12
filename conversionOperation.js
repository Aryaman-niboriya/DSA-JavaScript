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
