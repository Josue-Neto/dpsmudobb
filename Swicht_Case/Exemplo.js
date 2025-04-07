//Declaração da Variável 
let op= 1; // Atribui o valor para a variável 
//opções 
console.log("");
console.log("Suporte Técnico: Digite 1 "); 
console.log("Atendimento ao Cliente: Digite 2 "); 
console.log("Financeiro: Digite 3 "); 
console.log("------");

switch (op) { 
    case 1: 
        console.log(`Você escolheu opção ${op}: Suporte Técnico`); 
        break; 
        case 2: 
            console.log(`Você escolheu opção ${op}: Atendimento ao Cliente`); 
        break; 
        case 3: 
            console.log(`Você escolheu opção ${op}: Atendimento Financeiro`); 
        break; 
    default: 
        console.log("Opção Inválida!!!"); 
        break; 
}