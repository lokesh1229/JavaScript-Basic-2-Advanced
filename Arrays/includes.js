//--> includes

const rs = require("readline-sync");

const sizes = ["S","M","L","XL","XXL"];
const ans = rs.question("What size of shirt do you want?");

if(sizes.includes(ans)){
    console.log("Size available");
}else{
     console.log("Size Unavailable");
}


