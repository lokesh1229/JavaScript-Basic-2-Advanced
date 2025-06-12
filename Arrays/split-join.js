//--> split
const str = "madam";
const x = str.split("");
console.log(x);

//--> join
const s = x.join("");
console.log(s);

const isPalindrome = (str) => str === str.split("").reverse().join("") ? "Palindrome" : "Not Palindrome";

console.log(isPalindrome("bat"));
