function name() {
    console.log("this is a function");
    console.log("iam aryaman")
}
name()
/*function addnumber(number1,number2){
   console.log(number1+number2)

}
addnumber(2,3)*/

/*function addnumber(number1,number2){
   //let result=number1+number2
   //return result
return number1+number2
}
const result= addnumber(2,3)
console.log(result);*/

function userlogedin(name = "manya"){
    if(name == undefined){
        console.log("please provide a name")
        return
    } return `${name} just logged in successfully`
}
console.log(userlogedin());