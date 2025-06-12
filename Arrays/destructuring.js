//--> Destructuring
const arr = [1,2,3,["html","css","js"]];

const [a,b,c,courses] = arr;
//internally const [a,b,c,courses] = [1,2,3,["html","css","js"]];

console.log(a);
console.log(courses);

/**
 * by using ...
 */

const [x,y,...rest] = arr;

console.log(x);

console.log(rest);

//Use Case --> Swapping 2 numbers

let m = 5, n = 6;
[m,n] = [n,m];

console.log(m);
console.log(n);

