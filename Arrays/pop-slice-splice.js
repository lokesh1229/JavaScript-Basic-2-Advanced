const a = ["apple","banana","kiwi"];

a.pop(); //removes last element

console.log(a);

a.push("kiwi");

console.log(a.slice(1));

console.log(a.slice(0,2));

console.log(a.splice(1,2)); //starting removal of elements 1 and deleteCount

console.log(a.splice(1,2,"kiwi"));
