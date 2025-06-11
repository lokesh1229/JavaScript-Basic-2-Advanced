//--> String includes() --> It checks whether it holds the character or not --> T/F

const str = "Hi Hello Everyone";

console.log(str.includes("H"));


const vowelChecker = (str) => {
    flag = false;
    const vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            flag = true;
        }else{
            flag = false;
        }
    }
    if(flag){
        console.log("String contains vowels");
    }else{
        console.log("String doesn't contains vowels");
        
    }
}

vowelChecker(str);

