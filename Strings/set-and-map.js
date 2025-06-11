const sId = new Set();
sId.add(1);
sId.add(2);
sId.add(3);
sId.add(4);

console.log(sId);

// Conversion of arrays to set and set to arrays

//--> Conversion of arrays to set

const arr1 = [1,2,3,4];

const uniQueSID = new Set(arr1);

console.log(uniQueSID);


//--> Conversion of set to arrays
//--> Spread ... operator is used to copy the array elements or objects into another array
const newSIDs = [...uniQueSID]

console.log({newSIDs});

//--> set functions

const x = new Set();
x.add(1);
x.add(2);
console.log(x);
x.delete(1); //Deletes the element

//x.clear(); //To empty the set
console.log(x.size);

console.log(x);
console.log(x.keys());
console.log(x.values()); //values

//has
console.log(x.has(5));

// --> forEach
x.forEach((value) => {
    console.log(value);
});

/// ---> Map
/*
-> Key Types
-> Key Order
-> Size
-> Iteration
-> Performance (insertion, deletion)
*/

const newMap = new Map();

newMap.set(10,"Lokesh");
newMap.set(11,"X");
console.log(newMap);
console.log(newMap.get(10));
// newMap.delete(10);
console.log(newMap.size);

//forEach
newMap.forEach((value)=>{
    console.log(value);
    
})

//has 
console.log(newMap.has(11));



