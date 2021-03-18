let custo = 65.90;
let venda = 79.90;
let custoTotal = (custo + 20/100);

lucro = (custoTotal - venda);

if (custo < 0) {
    console.log("Erro");
} else if (venda < 0) {
    console.log("Erro");
} else {
    console.log("R$"+ lucro); 
}
