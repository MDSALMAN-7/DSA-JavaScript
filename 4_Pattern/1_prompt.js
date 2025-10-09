
    let prompt = require('prompt-sync')();
    let a=prompt("enter number");
    for(let i=1; i<=a; i++){
        for(let j=1; j<=a; j++){
            process.stdout.write("* "); 
        }
        console.log();
    }
    
    
    
    
    // for(let i=1; i<=5; i++){
    //     for(let j=i; j<=5; j++){
    //         console.log("* ");
    //     }
    // }