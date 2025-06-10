const str = "Hello Everyone";

//charAt() at specific index
console.log(str.charAt(9));

//charCodeAt() --> ASCII
console.log(str.charCodeAt(1));

let x = "geeks";
let y = "";

for (let i = 0; i < x.length; i++) {
    if(x.charAt(i) === 'e'){
        y+= String.fromCharCode(x.charCodeAt(i)+1);
    }else{
        y+= String.fromCharCode(x.charCodeAt(i)+2);
    }
}

console.log(y);


