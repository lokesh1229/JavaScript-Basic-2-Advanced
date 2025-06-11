const str = "I am Lokesh";

//Iterating over strings
for(let char of str){
    console.log(char);
}

for(let char of str){
    if(char == 'a'){
       break;
    }else{
        console.log(char); 
    }
}

console.log(str[0]);
console.log(str[2]);

//Using for loop

for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}

for (let i = 0; i < str.length; i++){
    if(str[i] === "L"){
        console.log(i);
    }
}
