const a = 60; const b = -69; const c = 60;

let type_a = typeof a; let type_b = typeof b; let type_c = typeof c;

console.log(type_a,type_b,type_c);

if(a+b+c === 180){
    console.log("true");
}
else if(a<0||b<0||c<0){
    console.log("erro");
}
else if(a+b+c != 180){
    console.log("false");
}
