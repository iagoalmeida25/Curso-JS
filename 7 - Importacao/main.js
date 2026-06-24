const {gets, print} = require ('./funcoes-auxiliares');

let numerosSorteados = 0;

for (let i = 0; i <= 5; i++){    
    const numeroSorteado = gets();
    if (numeroSorteado > numerosSorteados){
        numerosSorteados = numeroSorteado;
    }
}

print(numerosSorteados);
