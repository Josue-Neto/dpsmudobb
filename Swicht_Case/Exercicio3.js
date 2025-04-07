const transporte = "uber"; 

switch (transporte) { 
    case "uber": 
       // Código a ser executado se expressão === valor1 
       console.log(`0 transporte escolhido foi ${transporte}.`); 
       break; 
    case "99": 
       // Código a ser executado se expressão === valor2 
       console.log(`0 transporte escolhido foi ${transporte}.`);break; 
    case "ônibus": 
       console.log(`0 transporte escolhido foi ${transporte}.`); 
    default: 
    // Código a ser executado se nenhum valor corresponder 
       console.log(`Opção inválida ${transporte}.`); 
}