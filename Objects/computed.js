/**
 * Adding property to object
 * Computed Property
 */

const readlinesync = require("readline-sync");
const q = readlinesync.question("Obj name? ");
const obj = {
    name : "Lokesh",
    age : 33
};

obj.city = "Hyd";

console.log(obj);

console.log(obj[q]);

