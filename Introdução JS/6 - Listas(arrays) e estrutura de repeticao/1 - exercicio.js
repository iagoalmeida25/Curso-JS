//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 6;

for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}