// primitive data types

//7 types : string , number , boolean , null , undefined , symbol , bigint



const id = Symbol("123");
const iid = Symbol("123");
console.log(id===iid);

const biginttr = 23445938383874n;
console.log(typeof biginttr)


//Reference or non primitive data types

//3 types : object , array , function

let heros =["ironman,","spiderman","thor","captain america"];

let myobj = {
    name: "rdj",
    age: 58,
    nickname: "ironman",
    work : "engineer",
}

const myfnc = function(){
    console.log("this is a function");
}

myfnc();

console.log(typeof myfnc);