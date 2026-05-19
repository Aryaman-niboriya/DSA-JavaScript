const clock = document.getElementById("clock")
// const clock = document.quesrySelector("#clock") // both are same

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
