/*Atividade para Fixação de Conteúdo: Teste do Polígrafo

Desenvolver um sistema que irá realizar 10 perguntas para uma pessoa sobre uma determinada ocorrência policial. 
Você terá como exemplo 4 perguntas iniciais e irá elaborar outras 5.

As perguntas iniciais são: 
1. Telefonou para a vítima? 
2. Esteve no local da ocorrência? 
3. Mora perto da vítima? 
4. Já trabalhou com a vítima? 
5. .... 
Ao final, seu programa deverá calcular a quantidade de respostas “sim” ou “não” e irá emitir um parecer sobre o possível envolvimento da pessoa neste delito (crime). 

Se a pessoa responder positivamente a 5 questões ela deverá ser classificada como “Suspeita”.
Entre 6 e 8 “Cúmplice” 
Caso responda positivamente a 9 ou 10, será classificada como “Culpada”.
Bom trabalho! */

console.log("-------------------------------------");
console.log("Digite 1: Primavera"); 
console.log("Digite 2: Verão "); 
console.log("Digite 3: Outono"); 
console.log("Digite 4: Inverno"); 
console.log("-------------------------------------");
console.log(""); 

let S = "Sim"
    switch(S){
        case "1":
            console.log(`Telefonou para a vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break;
        case "2":
            console.log(`Esteve no local da ocorrência?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "3":
            console.log(`Mora perto da vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "4":
            console.log(`Já trabalhou com a vítima?`)
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "5":
            console.log(`Viu a vítima no dia do crime?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "6":
            console.log(``);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "7":
            console.log(`Telefonou para a vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "8":
            console.log(`Telefonou para a vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "9":
            console.log(`Telefonou para a vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break; 
        case "10":
            console.log(`Telefonou para a vítima?`);
            console.log(`Entrevistado: ${S}`);    
            break;
}
respostas();