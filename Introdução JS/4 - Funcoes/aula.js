
/*
/ Function - Função e podemos passar parâmetros para as funções 
function sayMyName(name){
    console.log('Your name is ' + name);
}

sayMyName('João');
sayMyName('Maria');

// Function - Função para retornar um valor
function  quadrado(valor){
    return valor * valor;
}

const resultado = quadrado(10);
console.log(resultado);
*/

//Para organizarmos nossas funções e evitar conflitos de nomes, podemos criar um escopo para as nossas funções, ou seja, uma função principal que irá chamar as outras funções, a famosa main.
function main(){
    const name = 'João';
    console.log('Your name is ' + name);
}

main();