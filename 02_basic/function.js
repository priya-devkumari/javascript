

function sayMyName() {
console.log("p");
console.log("r");
console.log("i");
console.log("y");
console.log("a");
}
//sayMyName()

// function addTwoNumber(num1,num2) {
//     console.log(num1+num1);
// }
//addTwoNumber(7,8)
// function additon(num1,num2) {
//     let result=num1+num2;
//     return result;
// }
//  const result=additon(5,8)
//  console.log("result",result)

// function userLoggin(userName) {
//     return `${userName} just loggin`
// }
// console.log(userLoggin("priya"))


function userLogginMessage(userName) {
    if (!userName) {
        console.log("please enter userName");
        return
        
    }
    
    return`${userName} just loggin`
}
// console.log(userLogginMessage("priya"));

// console.log(userLogginMessage());


function calculateCartPrice(...num) {
    return num
}
//console.log(calculateCartPrice(300,700,500));

const user ={
    name:"priya",
    Price:400
}
function handleObject(anyObject) {
    //console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
//handleObject(user)
// handleObject({
//     userName:"pihuu",
//     price:344
// })

const userarray =[300,600,400,500]
function myArray(getarray) {
    return getarray[1]
}
//console.log(myArray(userarray));
 console.log(myArray([400,900,100]));
 