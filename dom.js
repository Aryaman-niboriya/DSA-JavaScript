// four pillars of js

//selection of element-----
//chanaging html-----
//changing css
//event listener

var a= document.querySelector("h1")// selection of element
a.innerHTML="change........" // change html
a.style.color="red"//change css
a.style.backgroundColor = "white"//change css

a.addEventListener("click",function(){//event listener
   a.innerHTML="me bhi badalgya leo ab to "
   a.style.color="green"
   a.style.backgroundColor="yellow"
})

var bulb=document.querySelector("#bulb")
var button=document.querySelector('#button')

var flag = 0;
if(flag==0){
bulb.addEventListener("click",function(){
    bulb.style.height="300px";
    bulb.style.width="300px";
    bulb.style.borderRadius= "50%";
    bulb.style.border="4x solid #000";
    bulb.style.backgroundColor = "blue";
    flag=1
})
}else{
    bulb.style.height="300px";
    bulb.style.width="300px";
    bulb.style.borderRadius= "50%";
    bulb.style.border="4x solid #000";
    bulb.style.backgroundColor = "transparent";
    flag=0
    }
var h = document.querySelectorAll('h1')
console.log(h)

h.forEach(function(e){
    console.log(e)

})