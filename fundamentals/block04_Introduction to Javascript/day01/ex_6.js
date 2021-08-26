let peca = "dama";

if(peca==="peão"||peca ==="PEÃO"){
    console.log("2 casas a frente no primeiro movimento, 1 depois.");
}
else if(peca==="cavalo"||peca==="CAVALO"){
    console.log("Em L, ou 2 casas na horizontal 1 na vertical ou 2 na vertical 1 horizontal.");
}
else if(peca==="bispo"||peca==="BISPO"){
    console.log("Diagonal, quantas casas quiser.");
}
else if(peca==="torre"||peca==="TORRE"){
    console.log("Linha reta vertical ou horizontal, quantas casas quiser.");
}
else if(peca==="dama"||peca==="DAMA"){
    console.log("Qualquer direção,quantas casas quiser.");
}
else if(peca==="rei"||peca==="REI"){
    console.log("Qualquer direção, 1 casa por vez.");
}
else{
    console.log("Peça inválida");
}