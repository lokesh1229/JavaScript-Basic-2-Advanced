const b = ["apple","banana","kiwi"];

b.pop(); //removes last element

console.log(b);

b.push("kiwi");


c = ["html","css","js","jquery","reactjs","vue.js"];

console.log(c.slice(1));

console.log(c.slice(0,2));

console.log(c.splice(1,2)); //starting removal of elements 1 and no. of elements -> 2

console.log(c.splice(0,0,"bootstrap"));

console.log(c);

