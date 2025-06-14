function user(name,age) {
    (this.name = name) , (this.age = age);
};

const u1 = new user();

u1.name = "Raju";
u1.age = 22;

console.log(u1);



