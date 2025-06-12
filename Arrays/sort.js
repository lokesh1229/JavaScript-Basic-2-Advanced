const str = ["apple","banana","kiwi","cat"];
str.sort();
console.log(str);


const n = [10, 1, 5, 15, 8, 3, 9, 14, 4, 6, 2, 12, 7, 11, 13];

const sortAscending = (a,b) => a-b;

const sortDescending = (a,b) => b-a;

n.sort(sortAscending);

console.log(n);

n.sort(sortDescending);

console.log(n);

