//const app = new Object()
//console.log(app);

const app={}
app.userName="priya"
app.id = "123abc"
app.loggedIn = false
//console.log(app);
const regularUser ={
    email:"priya@gmail.com",
    fullname:{
        userFullName:{
            firstName:"priya",
            lastName:"kumari"
        }
    }
}
//console.log(regularUser.fullname.userFullName);

const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:"123qwe",
        email:"pihu@gmail.com"
    },
    {
        id:"123qwe",
        email:"pihu@gmail.com"
    },
    {
        id:"123qwe",
        email:"pihu@gmail.com"
    },

]
users[1].email
// console.log(app);
// console.log(Object.keys(app));
// console.log(Object.values(app));
// console.log(Object.entries(app));
// console.log(app.hasOwnProperty('isloggedIn'));

const course={
    courseName:"javascript",
    courseFee:1200,
    courseInstructor:"hitesh"
}

//console.log(course.courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);


// {
//     "name" : "priya",
//     "courseName" : "javascript",
//     "price" : "free"
// }














