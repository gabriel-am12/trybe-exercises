// escreva greet abaixo

const greet = (string, stdGreet = 'Hi') => `${stdGreet} ${string}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'