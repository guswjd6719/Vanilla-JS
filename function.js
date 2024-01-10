//function

function sayHello(name, age){
    console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello("Justin", 123);
sayHello("flynn",12);



function plus(a, b){
    console.log(a + b);
}

plus(1,2);



const member = {
    name: "niko",
    sayHello: function(name) {
        console.log("hello, " + name + ". Nice to meet you.");
    },
}
console.log(member.name);
member.sayHello("lynn");