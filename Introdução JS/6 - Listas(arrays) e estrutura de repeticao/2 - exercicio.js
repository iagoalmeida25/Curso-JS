//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaNumeros.length; i++) {
    const numero = listaNumeros[i];
    if (numero % 2 === 0){
        console.log(`O numero ${numero} é par`);
    }    
}
