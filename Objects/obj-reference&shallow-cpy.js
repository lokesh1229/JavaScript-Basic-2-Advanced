/**
 * Object Reference & Shallow Copy
 */


//Below shows shallow copy
const p1 = {
    name : "Lokesh",
    age : 33,
    address : {
        city : "Hyderabad",
        state : "Telangana"
    }
}

const p2 = p1;

p2.name = "Bhanu";

console.log(p1);
console.log(p2);

//To overcome the above problem

const p3 = Object.assign({},p1);

console.log(p3);

p3.name = "Raju";
p3.address.city = "Mumbai";
p3.address.state = "Maharashtra";

console.log(p3);

