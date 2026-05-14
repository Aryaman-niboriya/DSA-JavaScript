const tinder = new Object();// singleton object
const tinder2 = {};//non singleton object
tinder.id = 12;
tinder.name = "arya";
tinder.loggedIn = false;
console.log(tinder,tinder2);

const regularuser = {
    email:"aryaman@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aryaman",
            lastname:"niboriya",
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)

//object assign method
const obj1={1:"one",2:"two"}
const obj2={3:"three",4:"four"}
const obj3 ={5:"one",6:"two"}
const obj4 =  Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//spread operator
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);//this method is so easy as compared to object assign method

//find object key and value
console.log(Object.keys(obj4));
console.log(Object.values(obj4));

//check object hasownproperty nethod
console.log(obj3.hasOwnProperty(7));