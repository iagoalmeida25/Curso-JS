/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    idade;
    altura;
    peso;

    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificacaoIMC() {
        const IMC = this.calcularIMC();
        if (IMC < 18.5) {
            return "Abaixo do Peso";
        } else if (IMC >= 18.5 && IMC < 25) {
            return "Peso Normal";
        } else if (IMC >= 25 && IMC < 30) {
            return "Acima do peso";
        } else {
            return "Obesidade";
        }
    }
}

const jose = new Pessoa("José", 30, 1.75, 70);
console.log(jose.calcularIMC().toFixed(2));

console.log(jose.classificacaoIMC());