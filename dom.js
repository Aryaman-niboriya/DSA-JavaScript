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

// ...existing code...
var bulb=document.querySelector("#bulb")
var button=document.querySelector('#button')

// replaced toggle logic with a single click listener that toggles styles and fixes typos (4px, camelCase)
let flag = 0;
if (!bulb) {
    console.warn('No element with id "bulb" found');
} else {
    bulb.addEventListener("click", function () {
        if (flag === 0) {
            bulb.style.height = "300px";
            bulb.style.width = "300px";
            bulb.style.borderRadius = "50%";
            bulb.style.border = "4px solid #000";
            bulb.style.backgroundColor = "blue";
            flag = 1;
        } else {
            // clear inline styles to revert to stylesheet/default values
            bulb.style.height = "";
            bulb.style.width = "";
            bulb.style.borderRadius = "";
            bulb.style.border = "";
            bulb.style.backgroundColor = "transparent";
            flag = 0;
        }
    });
}
// ...existing code...
var h = document.querySelectorAll('h1')
console.log(h)