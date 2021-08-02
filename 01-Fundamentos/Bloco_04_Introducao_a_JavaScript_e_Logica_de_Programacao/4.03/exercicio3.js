/* 3- Agora inverta o lado do triângulo. Por exemplo: */

/* let n = 5;
let input = "";
let blankSpaces = "";
 */


/* for (let index = 0; index <= n ; index +=1) {
    console.log(input);

    input += blankSpaces + "*";    
}
 */

/* console.log("0000*")
console.log("000**")
console.log("00***")
console.log("0****")
console.log("*****") */

let n = 5;
let blankSpaces = "0";
let symbol = "*";

for (let index = n; index > 0; index -= 1) {
    console.log("0","0");
    blankSpaces -= 1;    
}