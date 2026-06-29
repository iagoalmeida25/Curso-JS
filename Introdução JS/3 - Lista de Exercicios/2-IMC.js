/***
 * 2) Faça um algoritmo que dado o peso (em kg) e a altura (em metros) de um adulto calcule o seu IMC e imprima a sua classificação conforme a tabela abaixo:
 *
 * IMC = peso / (altura * altura);
 *
 * Classificação:
 * - IMC menor que 18.5, abaixo do peso;
 * - IMC entre 18.5 e 25, peso normal;
 * - IMC entre 25 e 30, acima do peso;
 * - IMC acima de 30, obesidade;
 */

const peso = 109;
const altura = 1.82;

const IMC = peso / (altura * altura);

console.log(IMC);

if (IMC < 18.5){
    console.log("Abaixo do Peso")
}else if (IMC > 18.5 && IMC < 25){
    console.log("Peso Normal")
}else if (IMC > 25 && IMC < 30){
    console.log("Acima do peso")
}else{
    console.log("Obesidade")
}

const numero = 10; 
const numeroEmTexto = '10'; 
console.log(numero === numeroEmTexto);