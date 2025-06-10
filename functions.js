function print() {
    console.log("Hi everyone");
}
print();

//Anonymous Function

let anonymousFunction = function (){
    console.log("Hello everyone");
}

anonymousFunction();

// ---> Arrow Function

const sum1 = function (x,y) {
    return x+y;
}

const sum2 = (x,y) => {
    return x+y;
}

console.log(sum2(2,3));

// or -->

const sum3 = (x,y) => x+y;

const Add = (x,y) => {
    if(x>y){
        return x+y;
    }else{
        return x-y;
    }
}

console.log(Add(3,5));

//Or -->

const Add1 = (x,y) => x>y? x+y : x-y;

console.log(Add1(5,3));




