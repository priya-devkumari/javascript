// const userEmail =[]
// if (userEmail) {
//     console.log("got the useremail");
    
// }
// else{
//     console.log("donot have usermail");
    
// }

//falsy value
//false,0,-0,bigint on ,null,undefined,NaN

//truthy value
// "false","0","-0","",{},[]

// if (userEmail.length==0) {
//     console.log("array is empty");
    
// }
const emptyObj={}

    if (Object.keys(emptyObj).length===0) {
        console.log("object is empty");
        
    }

    //nullish coalescing operator (??): null undefine

    let val1;
    // val1=5??10
    val1=null ?? 10
    console.log(val1);

    //terniary operator

    //condition ? true:false
    