//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //  console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' +j + '=' + i*j);
        
        
        
    }
    
}



let myArray =["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index==5) {
//         console.log(`5 is the best number`);
// break
        
//     }
//     console.log(index);
    
    
// }


for (let index = 0; index <= 20; index++) {
    if (index==5) {
        console.log(`5 is the best number`);
        continue
        
    }
    console.log(index);
    
    
}