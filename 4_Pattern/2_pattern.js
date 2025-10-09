let prompt = require('prompt-sync')();
let a=parseInt(prompt("enter number"));

// 1.
// *
// **
// ***
// ****
// *****
// for(let i=1;i<=5; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// 2.
// 1
// 12
// 123
// 1234
// 12345
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i;j++){
//         // process.stdout.write((i).toString());
//         process.stdout.write(j+" ");
//     }
//     console.log()
// }

// 3.
// A
// A B 
// A B C
// A B C D 
// A B C D E 
// for(let i=1; i<=5; i++){
//     let ch=65;
//     for(let j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(ch)+" "); 
//         ch++
//     }
//     console.log()
// }

                // ************* Invert Right Angle Triangle ************
// 4.
// * * * * *
// * * * * 
// * * *
// * *   
// *

// for(let i =1; i<=a; i++){
//     for(let j=i; j<=a; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// 5. Mirror right angle triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *  
// for(let i=1; i<=a; i++){
//     for(let j=1; j<=a-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// for (let i = 1; i <= a; i++) {
//     // print spaces (decreasing)
//     for (let j = 1; j <= a - i; j++) {
//         process.stdout.write(" ");
//     }
//     // print stars (increasing)
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log(); // move to next line
// }

//  X pattern

// for (let i = 1; i <= a; i++) {
//     for (let j = 1; j <= a; j++) {
//         if (i == j || i + j == a + 1) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     console.log(); // move to next line
// }

// V Pattern
for(let i=1; i<=a; i++){
    for(let j=1; j<=2*a-1; j++){
        if(i==j||i+j==2*a){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
  
