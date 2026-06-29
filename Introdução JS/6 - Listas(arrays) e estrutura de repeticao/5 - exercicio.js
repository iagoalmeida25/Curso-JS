//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   
const media = [2, 7, 3, 8, 10, 4];

const reprovado = [];

for (let i = 0; i < media.length; i++){
    if (media[i] < 5){
        reprovado.push(media[i]);
    }
}

console.log(reprovado);