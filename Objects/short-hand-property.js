/**
 * Object --> short hand
 */

//normal 

function getObjects1(name,city) {
    return{
        name : name,
        city : city
    }
};

console.log(getObjects1("Lokesh","Hyd"));

//Using Short-Hand
//when key and value are same we return only a key

function getObjects2(name,city) {
    return {
        name,city
    }
}

console.log(getObjects2("Lokesh","Hyd"));

// Printing objects

const fname  = "Raju";
const age  = 25;

console.log({fname,age}); //Short-hand property



