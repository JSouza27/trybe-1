let salarioBruto;
let salarioBase;
let inss;

salarioBruto = 3000;

if (salarioBruto <=1556.94) {
    inss = (salarioBruto*(8/100));
    salarioBase = (salarioBruto-inss);
    console.log("Salário Base: R$"+salarioBase);
} else if (salarioBruto >1556.94 && salarioBruto <=2594.92) {
    inss = (salarioBruto*(9/100));
    salarioBase = (salarioBruto-inss);
       console.log("Salário Base: R$"+salarioBase);
} else if (salarioBruto >2594.92 && salarioBruto <=5189.82) {
    inss = (salarioBruto*(11/100));
    salarioBase = (salarioBruto-inss);
    console.log("Salário Base: R$"+salarioBase);
} else if (salarioBruto >=5189.82) {
    salarioBase = (salarioBruto-570.88);
    console.log("Salário Base: R$"+salarioBase);
} else {
    console.log("Valores não identificados!");
}

let ir;
let salarioLiquido;

if (salarioBase <=1903.98) {
    ir = 0;
    salarioLiquido = (salarioBase-ir);
    console.log("Salário Liquido: R$"+salarioLiquido);
} else if (salarioBase >1903.98 && salarioBase <=2826.65) {
    ir = (salarioBase*(7.5/100));
    salarioLiquido = (salarioBase-ir);
       console.log("Salário Liquido: R$"+salarioLiquido);
} else if (salarioBase >2826.65 && salarioBase <=3751.05) {
    ir = (salarioBase*(15/100));
    salarioLiquido= (salarioBase-ir);
    console.log("Salário Liquido: R$"+salarioLiquido);
} else if (salarioBase >3751.05 && salarioBase >=4664.68) {
    ir = (salarioBase*(22.5/100));
    salarioLiquido= (salarioBase-ir);
    console.log("Salário Liquido: R$"+salarioLiquido);
} else if (salarioBase >4664.68) {
    ir = (salarioBase*(27.5/100));
    salarioLiquido= (salarioBase-ir);
    console.log("Salário Liquido: R$"+salarioLiquido);
} else {
    console.log("Valores não identificados!");
}
