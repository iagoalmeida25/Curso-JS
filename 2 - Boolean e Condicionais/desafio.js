/* Faça um programa para caulcular o valor de uma viagem
Você terá as 5 variáveis:
1 - Preço do etanol
2 - Preço da gasolina
3 - o Tipo de combustível que o carro utiliza (etanol ou gasolina)
4 - Gasto médio de combustível do carro por km
5 - Distância em km da viagem

Imprima no console o valor que será gasto para realizar essa viagem. */

let precoEtanol = 4.90;
let precoGasolina = 5.50;
let tipoCombustivel = 'etanol'; // Pode ser 'etanol' ou 'gasolina'
let gastoMedio = 16;
let distancia = 200; // Distância em km da viagem

let litrosNecessarios = distancia / gastoMedio; // Calcula a quantidade de litros necessários para a viagem
let valorGasto;

if (tipoCombustivel === 'etanol') {
  valorGasto = litrosNecessarios * precoEtanol; // Calcula o valor gasto para a viagem com etanol
  console.log('Calculando o valor gasto para a viagem com etanol...'); // Imprime uma mensagem indicando que o cálculo está sendo realizado
  console.log('Valor gasto com etanol é: R$', valorGasto.toFixed(2)); // Imprime o valor gasto, formatado com 2 casas decimais
} else if (tipoCombustivel === 'gasolina') {
  valorGasto = litrosNecessarios * precoGasolina; // Calcula o valor gasto para a viagem com gasolina
  console.log('Calculando o valor gasto para a viagem com gasolina...'); // Imprime uma mensagem indicando que o cálculo está sendo realizado
  console.log('Valor gasto com gasolina é: R$', valorGasto.toFixed(2)); // Imprime o valor gasto, formatado com 2 casas decimais
}