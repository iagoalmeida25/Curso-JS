// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares');


let salario = 0;

let benefio = 0;

for(let i = 0; i < 2; i++){
    if(i <= 0){
        salario = gets();
    }else{
        benefio = gets();
    }
}

let aReceber = 0;

if (salario <= 1100){
    aReceber = salario - (salario*0.05) + benefio;
}else if(salario > 1100 && salario < 2500){
    aReceber = salario - (salario*0.1) + benefio; 
}else{
    aReceber = salario - (salario*0.15) + benefio; 
}

print(aReceber);