// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcao-auxiliar');

let maiorPar = 0;

let menorImpar = 9999;

for (let i = 0; i <= 6; i++){
    let numeroInformado = gets();
    if (numeroInformado % 2 === 0){
        if (maiorPar < numeroInformado){
            maiorPar = numeroInformado;
        }
    }else if (menorImpar > numeroInformado){
                menorImpar = numeroInformado;
    }
}

print(maiorPar);
print(menorImpar);
