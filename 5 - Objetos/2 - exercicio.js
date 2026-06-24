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
            const falta = (18.5 - IMC);
            const faltapeso = falta + IMC * (this.altura * this.altura);
            return `Abaixo do Peso por ${faltapeso}`;
        } else if (IMC >= 18.5 && IMC < 25) {
            return "Peso Normal";
        } else if (IMC >= 25 && IMC < 30) {
            const falta = (IMC - 30);
            const faltapeso =  IMC - falta * (this.altura * this.altura);
            const pesoideal = this.peso - faltapeso;
            return `Acima do peso por ${faltapeso}, peso ideal ${pesoideal}`;
        } else {
            const falta = (IMC - 31);
            const faltapeso = IMC - falta * (this.altura * this.altura);
            const pesoideal = this.peso - faltapeso;
            return `Obesidadepor ${faltapeso}, peso ideal ${pesoideal}`;
        }
    }
}

const jose = new Pessoa("José", 30, 1.83, 102);
console.log(jose.calcularIMC().toFixed(2));

console.log(jose.classificacaoIMC());