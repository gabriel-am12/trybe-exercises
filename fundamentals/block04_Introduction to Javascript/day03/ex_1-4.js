/*exercise 01
let n = 5;
let empty = " ";
let asterisk = "*"; 

if(n > 1){
    for(let i = 0; i < n; i += 1){
        empty += asterisk;
    }
    for(let j = 0; j < n; j += 1){
        console.log(empty);
    }
}
*/

/*exercise 02
let n = 5;
let empty = " ";
let asterisk = "*"; 

if(n > 1){
    for(let i = 0;i <= n;i += 1){
        console.log(empty);
        empty += asterisk;
    }
}
*/

/*exercise 03
let n = 5;
let empty = ""; 
let asterisk ="*";

if(n > 1){
    //for responsible by the lines
    for(let i = 1;i <= n;i += 1){
        //for responsible by the blank spaces
        for(let j = 0; j < n - i; j += 1){
            empty += " ";
        }
        //for responsible by the asterisks
        for(let k = 0; k < i; k += 1){
            empty += asterisk;
        }
    empty += "\n"; // breakline
    }
}
console.log(empty);
*/

//exercise 04
let n = 5;
let empty = ""; 
let asterisk ="*";

for(let i = 1; i <= n; i += 1){
    for(let j = 0; j < n-i; j +=1){
        empty += " ";
    }
    for(let k = 0; k < 2*i-1;k += 1){
        empty += "*"
    }
    empty += "\n";
}
console.log(empty);
