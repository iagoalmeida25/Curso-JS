/* Faça um programa para caulcular o valor de uma viagem
Você terá as 3 variáveis:
1 - Preço do combustível por litro
2 - Gasto médio de combustível do carro por km
3 - Distância em km da viagem

Imprima no console o valor que será gasto para realizar essa viagem. */

let precoCombustivel = 5.50; // Preço do combustível por litro
let gastoMedio = 16;
let distancia = 200; // Distância em km da viagem

let litrosNecessarios = distancia / gastoMedio; // Calcula a quantidade de litros necessários para a viagem
let valorGasto = litrosNecessarios * precoCombustivel; // Calcula o valor gasto para a viagem

console.log('Calculando o valor gasto para a viagem...'); // Imprime uma mensagem indicando que o cálculo está sendo realizado
console.log('Preço do combustível por litro: R$', precoCombustivel);
console.log('Gasto médio de combustível do carro por km: ', gastoMedio, 'km/l');
console.log('Distância em km da viagem: ', distancia, 'km');
console.log('O valor gasto para realizar a viagem é: ', valorGasto.toFixed(2)); // Imprime o valor gasto, formatado com 2 casas decimais