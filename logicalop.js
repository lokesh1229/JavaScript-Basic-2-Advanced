let a = 12;
let b;

console.log(a + (b || 0));

console.log(3 || 2 || 1);

console.log("" || 0 || 2);

console.log("" || 0 || undefined);

console.log("" || "null" || 2);

console.log(3 && 2 && 1);

console.log("" && 0 && 2);

console.log("undefined" || "null" || "");

// NULL COALESCING

let x = "Lokesh";
console.log(x ?? "HiddenGeeks");

//O/p : Lokesh 
// NULL COALESCING ----> Usage

let y;
console.log(y ?? "HiddenGeeks");
// But Here O/P: HiddenGeeks





