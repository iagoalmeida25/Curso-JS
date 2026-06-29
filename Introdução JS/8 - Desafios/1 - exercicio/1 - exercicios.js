// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./1.1 - funcao-auxiliar-1exec');
const media = 7.5;


if (media < 5) {
    print("Reprovação");
}else if (media >= 5 && media < 7) {
    print("Recuperação");
}else{
    print("Passou de semestre");
}
