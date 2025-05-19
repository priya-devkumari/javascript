const name="priya"
const rapocount=47
//console.log(name+rapocount);
console.log(`hello my name is ${name} and my rapocount is ${rapocount}`);
//(` `)is a backtick 
const gameName= new String('priya kumari')

console.log(gameName[3])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.indexOf('y'))

const newString=gameName.substring(1,5)
console.log(newString)

const anotherString=gameName.slice(-8,5)
console.log(anotherString)

const newStringOne=   "     priya    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://www.google.com/"
console.log(url.replace('.Com','ylb'))