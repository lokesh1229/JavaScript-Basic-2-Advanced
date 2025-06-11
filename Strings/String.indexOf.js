//indexOf

const str = "Hello Everyone";

console.log(str.indexOf("E"));

//--> To start searching for string from specific index
console.log(str.indexOf("e",3)); //8

const findCharacter = function (text,char) {
    if(text.indexOf(char) === -1){
        console.log("character not found");
    }else{
        console.log("character found");
    }
}

//--> Or using Arrow function

const charFound = (text,char) => text.indexOf(char) === -1 ? "Char Not Found" : "Char Found";

console.log(charFound("Hello","e"));
