const salarioBruto = 3400.72;

function funcaoSalarioFinal(salarioBruto){
    function INSS(salarioBruto){
        switch(salarioBruto){
            case salarioBruto<=1556.94:
                let salarioBase = salarioBruto - (salarioBruto * 0.08);
                return salarioBase;
            case 1556.95<=salarioBruto<=2594.92:
                salarioBase = salarioBruto - (salarioBruto * 0.09);
                return salarioBase;
            case 2594.93<=salarioBruto<=5189.82:
                salarioBase = salarioBruto - (salarioBruto * 0.11);
                return salarioBase;
            case salarioBruto>5189.82:
                salarioBase = salarioBruto - 570.88;
                return salarioBase;
            default:
                console.log("error - caso inválido");
        }
    }
    let INSSretorno = INSS(salarioBruto);
    function IR(INSSretorno){
        switch(INSSretorno){
            case INSSretorno<=1903.98:
                let valorIR = 0;
                return valorIR;
            case 1903.99<=INSSretorno<=2826.65:
                valorIR = (INSSretorno*0.075) - 142.80;
                return valorIR;
            case 2826.66<=INSSretorno<=3751.05:
                valorIR = (INSSretorno*0.15) - 354.80;
                return valorIR;
            case 3751.06<=INSSretorno<=4664.68:
                valorIR = (INSSretorno*0.225) - 636.13;
                return valorIR;
            case INSSretorno>4664.68:
                valorIR = (INSSretorno*0275) - 869.36;
                return valorIR;
            default:
                console.log("error - caso inválido");
        }
    }
    let IRretorno = IR(INSSretorno);

    let salarioLiquido = INSSretorno - IRretorno;
    return salarioLiquido;
}
let salarioFinal = funcaoSalarioFinal(salarioBruto);
console.log(salarioFinal);
