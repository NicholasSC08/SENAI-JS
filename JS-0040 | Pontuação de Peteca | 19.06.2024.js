// 4) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

const maximo_de_arremeso_permitido_por_pessoa = 3;
const pontuacao_deus_petequeiro = 15;
const pontuacao_minima_profissional = 10;
const pontuacao_maxima_de_fim_de_semana = 9;
const pontuacao_minima_de_fim_de_semana = 5;
const pontuacao_maxima_pseudo_petequeiro = 4;
const pontuacao_minima_pseudo_petequeiro = 1;
let contador_de_arremessos = 0;
let pontos_do_arremesso;
let total_de_pontos_de_arremesso = 0;

while(contador_de_arremessos < maximo_de_arremeso_permitido_por_pessoa){

pontos_do_arremesso = parseInt(prompt(`Qual a pontuação de cada arremesso? (0 - 5) pontos.`));
total_de_pontos_de_arremesso = total_de_pontos_de_arremesso + pontos_do_arremesso;
contador_de_arremessos++;

};
switch(true){

  case total_de_pontos_de_arremesso < pontuacao_deus_petequeiro && total_de_pontos_de_arremesso >= pontuacao_minima_profissional:

  alert(`Petequeiro profissional.\nPontuação: ${Number(total_de_pontos_de_arremesso.toFixed(2))}`);
  break;
  case  total_de_pontos_de_arremesso <= pontuacao_maxima_de_fim_de_semana && total_de_pontos_de_arremesso >= pontuacao_minima_de_fim_de_semana:

   alert(`Petequeiro de final de semana.\nPontuação: ${Number(total_de_pontos_de_arremesso.toFixed(2))}`);
   break;

   case total_de_pontos_de_arremesso <= pontuacao_maxima_pseudo_petequeiro && total_de_pontos_de_arremesso >= pontuacao_minima_pseudo_petequeiro:

   alert(`Pseudo-petequeiro.\nPontuação: ${Number(total_de_pontos_de_arremesso.toFixed(2))}`);
   break;

   case total_de_pontos_de_arremesso == pontuacao_deus_petequeiro:

   alert(`Deua da peteca.\nPontuação: ${Number(total_de_pontos_de_arremesso.toFixed(2))}`);

   default:
    alert(`Nunca petequeiro.\nPontuação: ${Number(total_de_pontos_de_arremesso.toFixed(2))}`);
};
