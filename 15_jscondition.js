//==,===,<,>,<=,>=,!=,!==,&&,||,?
const tem = 44;
if(tem>20){
    console.log("it is hot outside");
}else{
    console.log("it is cold outside");
}

const loggedin = true;
if (loggedin==true){
    console.log("welcome to the website");
}
else{
    console.log("please login to the website");
}

const balance = 1000;
if(balance<500){
    console.log("your balance is less than 500");
}else if(balance<750){
    console.log("your balance is less than 750");
}else if (balance<999.999){
    console.log("your balance is less than 1000");
}else {
    console.log("your balance is 1000 or more");
}

//&& operator
const userloggedin = true;
const debitcard = true;
if (userloggedin && debitcard){ // && me if koi ak condition bhi false he to pura condition false ho jata he
    console.log("you can make a purchase");
}

// || operator
const loggedinfromgoogle = false;
const loggedinfromemail = true;
if (loggedinfromgoogle || loggedinfromemail){ // || me if koi ak condition bhi true he to pura condition true ho jata he
    console.log("you are logged in");
}