//exercise 06
let number = 32;
let divisors = 1;

for(let i = 2; i <= number; i += 1){
    if(number % i === 0){
        divisors += 1;
    }
}

if(divisors === 2){
    console.log(number + " é número primo");
}
else{
    console.log("não é número primo");
}
