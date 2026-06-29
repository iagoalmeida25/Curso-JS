//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let listaNumerica = [];

for (let i = 10; i <= 50; i++){
    listaNumerica.push(i);
    
}

console.log(listaNumerica);

let numerosPares = [];

for(let i = 0; i <= listaNumerica.length; i++){
    if(listaNumerica[i] % 2 === 0){
        numerosPares.push(listaNumerica[i]);
    } 
}

console.log(numerosPares);