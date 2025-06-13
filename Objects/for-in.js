const obj = {
    name : "Lokesh",
    city : "Hyderabad"
}

console.log(obj);

// in usage

const propertyFound = "city" in obj;

//for in usage

for(let key in obj){
    console.log(key,obj[key]);
}