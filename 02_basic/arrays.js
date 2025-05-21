//arays
/*const myArr = [1,2,3,4,5];
const fruit = ["apple","orange"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//****method *****
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.includes(4));
console.log(myArr[4]);
console.log(myArr.indexOf(3));

const newArr=myArr.join()
console.log(newArr);


//slice
console.log(myArr);
const newArray= myArr.slice(0,3);
console.log(newArray);
console.log(myArr);

const newArr1=myArr.splice(0,2)
console.log(newArr1);
console.log(myArr); */



const fruit=["apple","mango"]
const fruit2= ["orange","banana"]
//fruit.push(fruit2);
//console.log(fruit);

//const allFruit=fruit.concat(fruit2)
//console.log(allFruit);
const all_new_fruit=[...fruit,...fruit2]
//console.log(all_new_fruit);

const all_fruit=[1,3,4,5,[5,6,8],[,9,0]]
const all_new_fruit1=all_fruit.flat(Infinity)
console.log(all_new_fruit1);
console.log(Array.isArray("priya"));
console.log(Array.from("priya"));











