/**
 * Function as Object Property
 */

const obj = {
    name : "Lokesh",
    greet : function (){
        console.log("Hello Lokesh");
    },
    bye : function (){
        console.log("Thank you");
    }
};

obj.greet();

obj.bye();
