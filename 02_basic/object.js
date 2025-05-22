//singleton

//object literals
const mySym=Symbol("key1")
const jsUser ={
    name:"priya kumari",
    [mySym]:"myKey1",
    age:21,
    email:"priya@gmail.com",
    location:"patna"
   
}

//console.log(jsUser.name);
//console.log(jsUser["name"]);
//console.log(jsUser["mySym"]);
//console.log([jsUser]);

jsUser.name="pihuupriya";
console.log([jsUser]);
//Object.freeze(jsUser)
jsUser.age=23;
console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello world");
    
}
jsUser.greetingtwo= function () {
    console.log(`hello jsUser,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());



