let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

//ex.01
console.log('Bem-vinda, ' + info.personagem);

//ex.02
info.recorrente = 'Sim';
console.log(info);

//ex.03
for(let key in info){
    console.log(key);
}

//ex.04
for(let key in info){
    console.log(info[key]);
}

//ex.05
let info02 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info02.personagem + '\n'
+ info.origem + ' e ' + info02.origem + '\n'
+ info.nota + ' e ' + info02.nota + '\n'
+ 'Ambos recorrentes' //ps.: modfiy this part after
);


