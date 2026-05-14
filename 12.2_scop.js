// ...existing code...
//nested block scope
function one(){
    const a = "ram"
function two(){
    const b = "raha"
    console.log(a);
    console.log(b);
}
two(); // call two so its logs run
} one()


//nested block scop with if condition
/*if(true){
    const name= "aryaman"
    if(name=="aryaman"){
        const city = "rajkot"
        
    } console.log(city); // this will give an error because city is defined inside the if block and we are trying to access it outside the block
} console.log(name); // this will give an error because name is defined inside the if block and we are trying to access it outside the block
*/

const addnum = function(num1){
   return num1+1;

}
console.log(addnum(5));