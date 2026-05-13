const name = "Aryaman";
const age = 19;
console.log(`my name is ${name} and my age is ${age}`);
//two ways to declare the string 
const a = "aavya ";
const b = new String("aavayaaaa") ;
console.log(b.toUpperCase());
console.log(a.charAt(0));
console.log(b.indexOf("v"));


//substring of the  string
const newstring = a.substring(0,3);
console.log(newstring);


//slicing the string
const str = "Aryaman";
console.log(str.slice(-6,-2));

//trim in js
const str1 ="    heloo        ";
console.log(str1.trim());

// replce methode in js 
let url ="www.google.  com";
let newurl = url.replace("google", "Facebook");
console.log(newurl)

// indclude method in js
console.log(url.includes("facebook"));

//split method in js
console.log(url.split("."));