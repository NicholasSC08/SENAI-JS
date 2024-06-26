// 15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. 
// O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), 
// Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). 
//Criar um programa que recebe o nome da equipe, 
// em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. 
// Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. 
// Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem 
// "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

let nome_da_equipe;
let integrante_um;
let integrante_dois;
let integrante_tres;
let integrante_quatro;
let tempo_pedalado_em_horas_um;
let tempo_pedalado_em_horas_dois;
let tempo_pedalado_em_horas_tres;
let tempo_pedalado_em_horas_quatro;
let velocidade_media_um;
let velocidade_media_dois;
let velocidade_media_tres;
let velocidade_media_quatro;
let distancia_total;
let velocidade_media_geral;
let soma_das_medias;
const quantidade_de_trechos = 4;
const desempenho_a = 15;
const desempenho_b = 18;
const trecho_um_nome = `Av. Beira-Mar até Cachoeira do Bom Jesus`;
const trecho_um_distancia = 30;
const trecho_dois_nome = `Cachoeira do Bom Jesus até Lagoa da Conceição`;
const trecho_dois_distancia = 45;
const trecho_tres_nome = `Lagoa da Conceição até Pântano do Sul`;
const trecho_tres_distancia = 30;
const trecho_quatro_nome = `Pântano do Sul até Av. Beira-Mar`;
const trecho_quatro_distancia = 35;

nome_da_equipe = prompt(`Qual o nome da equipe?`);
integrante_um = prompt(`Qual o nome do primeiro integrante(a)?`);
tempo_pedalado_em_horas_um = parseInt(prompt(`Qual o tempo pedalado em horas do(a) ${integrante_um}?`));
integrante_dois = prompt(`Qual o nome do segundo integrante(a)?`);
tempo_pedalado_em_horas_dois = parseInt(prompt(`Qual o tempo pedalado em horas do(a) ${integrante_dois}?`));
integrante_tres = prompt(`Qual o nome do terceiro integrante(a)?`);
tempo_pedalado_em_horas_tres = parseInt(prompt(`Qual o tempo pedalado em horas do(a) ${integrante_tres}?`));
integrante_quatro = prompt(`Qual o nome do quarto integrante(a)?`);
tempo_pedalado_em_horas_quatro = parseInt(prompt(`Qual o tempo pedalado em horas do(a) ${integrante_quatro}?`));

velocidade_media_um = trecho_um_distancia / tempo_pedalado_em_horas_um;
velocidade_media_dois = trecho_dois_distancia / tempo_pedalado_em_horas_dois;
velocidade_media_tres = trecho_tres_distancia / tempo_pedalado_em_horas_tres;
velocidade_media_quatro = trecho_quatro_distancia / tempo_pedalado_em_horas_quatro;

soma_das_medias = velocidade_media_um + velocidade_media_dois + velocidade_media_tres + velocidade_media_quatro;
velocidade_media_geral = soma_das_medias / quantidade_de_trechos;


alert(`Velocidade média do(a) ${integrante_um}: ${velocidade_media_um.toFixed(2)}km/h.\nTrajeto: ${trecho_um_nome}.`);
alert(`Velociade média do(a) ${integrante_dois}: ${velocidade_media_dois.toFixed(2)}km/h.\nTrajeto: ${trecho_dois_nome}.`);
alert(`Velocidade média do(a) ${integrante_tres}: ${velocidade_media_tres.toFixed(2)}km/h.\nTrajeto: ${trecho_tres_nome}.`);
alert(`Velociade média do(a) ${integrante_quatro}: ${velocidade_media_quatro.toFixed(2)}km/h.\nTrajeto: ${trecho_quatro_nome}`);
alert(`Velocidade média geral: ${velocidade_media_geral.toFixed(2)}km/h.`);
if(velocidade_media_geral < desempenho_a){
    alert(`Desempenho pode melhorar bastante!`);
} else if(velocidade_media_geral >= desempenho_a || velocidade_media_geral <= desempenho_b){
    alert(`Desempenho bom, mas ainda pode melhorar!`);
} else {
    alert(`Desempenho excelente. Parabéns!`);
};
