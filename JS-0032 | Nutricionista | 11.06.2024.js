// 14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. 
// Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). 
// Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, 
// se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não 
// pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let intolerante_a_lactose;
let intolerante_a_gluten;
let resposta_a_gluten;
let resposta_a_lactose;
let alimento_nao_recomandado = false;
let afirmacao = `SIM`;

prompt(`Qual o nome do paciente?`);
intolerante_a_lactose = prompt(`É intolerante a lactose?`);
intolerante_a_gluten = prompt(`É intolerante a glúten?`);

prompt(`Digite o nome do primeiro alimento:`);
resposta_a_gluten = prompt(`Possui glúten?`).toUpperCase();
resposta_a_lactose = prompt(`Possui lactose?`).toUpperCase();

if(intolerante_a_gluten == afirmacao && resposta_a_gluten == afirmacao || intolerante_a_lactose == afirmacao && resposta_a_lactose == afirmacao){
    alimento_nao_recomandado == true;
};


prompt(`Digite o segundo alimento:`);
resposta_a_gluten = prompt(`Possui glúten?`).toUpperCase();
resposta_a_lactose = prompt(`Possui lactose?`).toUpperCase();

if(intolerante_a_gluten == afirmacao && resposta_a_gluten == afirmacao || intolerante_a_lactose == afirmacao && resposta_a_lactose == afirmacao){
    alimento_nao_recomandado == true;
};


prompt(`Digite o terceiro alimento:`);
resposta_a_gluten = prompt(`Possui glúten?`).toUpperCase();
resposta_a_lactose = prompt(`Possui lactose`).toUpperCase();

if(intolerante_a_gluten == afirmacao && resposta_a_gluten == afirmacao || intolerante_a_lactose == afirmacao && resposta_a_lactose == afirmacao){
    alimento_nao_recomandado == true;
};

if(alimento_nao_recomandado == true){
    alert(`Dieta não recomendada.`);
} else {
    alert(`Dieta recomendada.`);
};
