//--> Using Spread operator ...

const x = [1,2,3,4,5];

console.log("arr :" , x);

console.log(...x);

const arr1 = [8,9,10,11,12];

const arr3 = [...x,6,7,...arr1];

console.log(arr3);
