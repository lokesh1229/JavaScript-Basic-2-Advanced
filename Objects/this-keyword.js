//this keyword refers to global window object

const obj = {
    name : "Lokesh",
    displayMessage : function (){
        console.log("Hello " + this.name);
    },

};

obj.displayMessage();

function calculate (){
    console.log(this);
}

calculate();