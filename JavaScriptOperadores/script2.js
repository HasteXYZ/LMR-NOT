let HT; // horas trabalhadas
let VH; // valor hora
let PD; // percentual de desconto
let TD; // total de desconto
let SB; // salário bruto
let SL; // salário liquido 

HT = prompt('Digite as Horas Trabalhadas:', 'Informe aqui.');
VH = prompt('Entre com o valor da hora: ','Informe aqui.');
PD = prompt('Informe o Percentual de desconto: ','em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*sb/100;
SL = SB - TD;

document.write('salário = ', SL);

