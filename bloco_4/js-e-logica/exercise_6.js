let theQueen;

let movement_1 = "horizontal direita";
let movement_2 = "horizontal esquerda";
let movement_3 = "vertical acima";
let movement_4 = "vertical abaixo";
let movement_5 = "diagonal direita";
let movement_6 = "diagonal esquerda";

theQueen = "frente";

switch (theQueen) {
    case "horizontal direita":
        console.log("Movendo-se para horizontal direita");
        break;

    case "horizontal esquerda":
        console.log("Movendo-se para horizontal esquerda");
        break;
    
    case "vertical acima":
        console.log("Movendo-se para vertical acima");
        break;
    
    case "vertical abaixo":
        console.log("Movendo-se para vertical abaixo");
        break;
    
    case "diagonal direita":
        console.log("Movendo-se para diagonal direita");
        break;

    case "diagonal esquerda":
        console.log("Movendo-se para diagonal esquerda");
        break;
        
    default:
        console.log("Erro: Movimento não permitido");
    }       