/* Controle de Presença (Procurar um Nome na Lista)
Problema: Uma escola precisa verificar se um aluno está presente na lista de chamada. O sistema deve informar se o aluno está na lista ou não.
*/
let listaPresenca = ["Sofia", "Mariana", "Beatriz", "Isabelly"];

function verificarPresenca(nome) {
    if (listaPresenca.includes(nome)) {
        return nome + " está presente.";
    } else {
        return nome + " não está na lista.";
    }
}

console.log(verificarPresenca("Guilherme"));
console.log(verificarPresenca("Mariana"));
console.log(verificarPresenca("Ítalo"));
console.log(verificarPresenca("Sofia"));