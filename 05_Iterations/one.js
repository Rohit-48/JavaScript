// for Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5) {
        // console.log("5 is Best Number")
    }
    // console.log(element);
    
    
}

 for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop ${j} anf Inner Loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j);
    }
    
 }


let myArray = ["Flash", "Batman", "Superman"]
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
 }

 // break and Continue

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);

        
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);

        
}