const custo = 4000; const vdeVenda = 6000

const custoTotal = custo * 0.2;

const lucro = vdeVenda - custoTotal;

if(custo<=0||vdeVenda<=0){
    console.log("erro - entrada(s) inválida(s)");
}
else{
    console.log(lucro);
}