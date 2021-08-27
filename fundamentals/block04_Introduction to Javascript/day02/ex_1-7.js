let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercise 01
/*for(let i = 0; i < numbers.length; i+=1){
    console.log(numbers[i]); 
}*/

/*exercise 02
let sum = 0;
for(let i = 0; i < numbers.length; i+=1){
   sum += numbers[i];
}
console.log(sum);
*/

/*exercise 03
let sum = 0;
for(let i = 0; i < numbers.length; i+=1){
   sum += numbers[i];
}
let mediaAritmetica = (sum/numbers.length);
console.log(mediaAritmetica);
*/

/*exercise 04
let sum = 0;
for(let i = 0; i < numbers.length; i+=1){
   sum += numbers[i];
}
let mediaAritmetica = (sum/numbers.length);
console.log(mediaAritmetica);
if(mediaAritmetica > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}
*/

/*exercise 05
let max = 0;
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);
*/

/*exercise 06
let odd = 0;
let even = 0;
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] % 2 === 0){
        even += 1;
    }
    else{
        odd += 1;
    }
}
if(odd == 0){
    console.log('nenhum valor impar encontrado');
}
console.log(odd);
*/

//exercise 07
let min = Infinity;
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min);





