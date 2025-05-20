//Dates
const Dates=new Date()
//console.log(Dates);
//console.log(Dates.toString());
//console.log(Dates.toISOString());
//console.log(Dates.toJSON);
//console.log(Dates.toLocaleString());


//let createDate=new Date(2003,2,12);
let createDate=new Date(2003, 2, 12 ,5,7);
//console.log(createDate.toLocaleString());

let myTimestamp=new Date.now()
console.log(myTimestamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));







