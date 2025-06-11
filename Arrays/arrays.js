/**
 * Arrays --> Non-primitive Data Types
 */

const sID = ["Lokesh","Bhanu","Raju","Vimal",1,2,3,["html","css","js"]];

console.log(sID);

console.log(sID[3]);

console.log(sID[7][2]);

for (let i = 0; i < sID.length; i++) {
    console.log(sID[i]);
}

for(let i of sID){
    console.log(i);
    
}