
function quantidade_de_casais_e_solteiros_na_reserva(){
// 2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais,
//  nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.
//   Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada,
//   incluindo todos indivíduos.

const quantidade_de_kilometros_por_casal = 400;
const quantidade_de_kilometros_por_individuo = 320;
const quantidade_de_machos_na_reserva = 5;
const quantidade_de_femeas_na_reserva = 9;
const quantia_de_leos_por_casal = 2;
let quantidade_de_casais_digitada_pelo_usuario;
let quantidade_de_solteiros_que_a_reserva_possui;
let quantidade_de_espaco_ocupada_por_leoes_solteiros;
let quantidade_de_espaco_ocupada_por_casais;
let area_total_ocupada_por_todos_os_individuos;
quantidade_de_casais_digitada_pelo_usuario = Number(prompt(`Quantos casais a reserva possui?`));

if(quantidade_de_casais_digitada_pelo_usuario <= quantidade_de_machos_na_reserva){
quantidade_de_solteiros_que_a_reserva_possui = quantidade_de_machos_na_reserva + quantidade_de_femeas_na_reserva - (quantidade_de_casais_digitada_pelo_usuario * quantia_de_leos_por_casal);
quantidade_de_espaco_ocupada_por_casais = quantidade_de_casais_digitada_pelo_usuario * quantidade_de_kilometros_por_casal;
quantidade_de_espaco_ocupada_por_leoes_solteiros = quantidade_de_solteiros_que_a_reserva_possui * quantidade_de_kilometros_por_individuo;
area_total_ocupada_por_todos_os_individuos = quantidade_de_espaco_ocupada_por_casais + quantidade_de_espaco_ocupada_por_leoes_solteiros;

alert(`
Quantidade de casais que a reserva possui: ${quantidade_de_casais_digitada_pelo_usuario}.
\nQuantidade de solteiros que a reserva possui: ${quantidade_de_solteiros_que_a_reserva_possui}.
\nQuantidade total da área ocupada por casais de leões é de: ${quantidade_de_espaco_ocupada_por_casais} km²;
\nQuantidade total da área ocupada por leões solteiros é de: ${quantidade_de_espaco_ocupada_por_leoes_solteiros} km²;
\nQuantidade total da área ocupada por todos os leões: ${area_total_ocupada_por_todos_os_individuos}km²;
`);
} else{

    alert(`Quantia de casias inválida! Quantidade acima do limite.`);
    quantidade_de_casais_e_solteiros_na_reserva();
};
};
quantidade_de_casais_e_solteiros_na_reserva();
