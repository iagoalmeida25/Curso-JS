//Para listas temos [] que forma um array, ou seja, uma coleção de dados.
//Podemos colocar qualquer tipo de dado dentro de um array, como números, strings, objetos, etc.

const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

//Para acessar um elemento do array, usamos o índice, que começa em 0.
console.log(alunos[0]);

alunos.push('Carlos'); //Adiciona um elemento no final do array
console.log(alunos);

const notas = [];

notas.push(10);
notas.push(8);
notas.push(9);
notas.push(7);

//Para calcular a média das notas, podemos usar um loop para somar todas as notas e depois dividir pelo número de notas.
//Vamos usar um loop for para percorrer o array de notas e somar todas as notas.
//Inicializamos a variável soma com 0, para depois ir somando as notas.
let soma = 0;

//O loop for começa com i = 0, que é o índice do primeiro elemento do array. Ele continua enquanto i for menor que o comprimento do array de notas, e a cada iteração ele incrementa i em 1.
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

//Depois do loop, a variável soma contém a soma de todas as notas. Agora podemos calcular a média dividindo a soma pelo número de notas, que é o comprimento do array de notas.
console.log(soma / notas.length);