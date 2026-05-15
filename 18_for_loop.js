for(let i = 0; i <=5; i++){
    console.log(`outer loop ${i}`);
    for(let j=0; j<=5; j++){
        console.log(`inner loop ${j}`);
    }
    
}
const myarray = ["superman","batman","spiderman"];
console.log(myarray.length);
for(let i=0; i<myarray.length; i++){
    console.log(myarray[i]);
}


for(let i =1; i<=20; i++){
    if(i==5){
        console.log("detected 5 ")
        break;
    }
    console.log(i);
}

for(let i =1; i<=20; i++){
    if(i==5){
        console.log("detected 5 ")
        continue;
    }
    console.log(i);
}
