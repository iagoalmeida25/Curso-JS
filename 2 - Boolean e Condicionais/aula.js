

const numero = 5;

// 3 = significa "é igual a", ou seja, estamos comparando se o número é par, ou seja, se o resto da divisão por 2 é igual a 0
const isdivisivelpor5 = numero % 5 === 0;
//boas práticas de programação, usar nomes de variáveis que sejam descritivos e fáceis de entender, como "isDivisivelPor5" para indicar que a variável armazena um valor booleano que indica se o número é divisível por 5 ou não.
//e como é em inglês, usar CamelCase para nomear as variáveis, ou seja, a primeira letra de cada palavra em maiúscula, exceto a primeira palavra que deve ser em minúscula. e como é ou não é uma pergunta, usar "is" no início do nome da variável para indicar que é um valor booleano.   

//Como 0 é 0, não é possível dividir por 0, então o número é inválido 
//porem em JS podemos usar else if caso o numero n seja 0 na primeira condição, e ai sim verificar se é divisivel por 5 ou não
if (numero == 0){
    console.log('O numero é invalido');
} else if(divisivelpor5) {
  console.log('Sim');
} else {
  console.log('Não');
}
//Para boas braticas dar espaço do cocheites e else na frente do colchetes do if.