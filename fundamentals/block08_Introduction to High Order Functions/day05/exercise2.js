const sum = (...params) => params
.reduce(((acc, curr) => acc + curr), 0);

console.log(sum(1,2,3,4,5,6));
console.log(sum(7,10));