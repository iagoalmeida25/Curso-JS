//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['iago', 'marilia', 'Vitoria', 'pedro', 'Vitor'];

let nomeV = [];

for (let i = 0; i < nomes.length; i++){
    //console.log(nomes[i]);
    if (nomes[i][0] === 'V'){
        
        nomeV += `${nomes[i]}, `;
        
    }
}

console.log(nomeV);