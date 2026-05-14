const user ={
    username:"aryaman",
    price:22,
    welcome:function(){
        console.log(`${this.username},"welcome to website"`);
    }
}

user.username = "raj";
user.welcome();
console.log(this);// this contain empty object in node 


function chai(){
    console.log(this);

}
chai()

//arrow function

const newFunction = (num1,num2) => {
    return num1+num2
}
console.log(newFunction(5,10))// this contain empty object in node but in browser it contain window object