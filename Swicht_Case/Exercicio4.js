let op = "4"; 
//opções 
console.log("-------------------------------------");
console.log("Digite 1: Primavera"); 
console.log("Digite 2: Verão "); 
console.log("Digite 3: Outono"); 
console.log("Digite 4: Inverno"); 
console.log("-------------------------------------");
console.log(""); 

switch (op) {
    case "1": 
        console.log(`Você escolheu a opção ${op}: Primavera `);  
        break; 
    case ("2"): 
        console.log(`Você escolheu a opção ${op}: Verão `); 
        break; 
    case ("3"): 
        console.log(`Você escolheu a opção ${op}: Outono `); 
        break; 
    case ("4"): 
        console.log(`Você escolheu a opção ${op}: Inverno `); break; 
    default: 
        console.log(`Opção Inválida!!!`); 
        break;
} 
console.log("Fim do Programa."); 
console.log("-------------------------------------")