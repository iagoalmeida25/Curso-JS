/* Aula sobre Objetis em JavaScript */
/*
    * Objetos são estruturas de dados que permitem armazenar e organizar informações de forma mais complexa. 
Eles são compostos por propriedades (chave-valor) e métodos (funções associadas ao objeto). 
Os objetos são fundamentais para a programação orientada a objetos (POO) e são amplamente utilizados em JavaScript 
para representar entidades do mundo real, como pessoas, carros, produtos, etc.
    * Propriedades: São as características ou atributos de um objeto. Elas são representadas por pares de chave-valor, onde a chave é o nome da propriedade e o valor é o dado associado a essa propriedade. Por exemplo, em um objeto "pessoa", as propriedades podem ser "nome", "idade" e "altura".
    * Métodos: São as ações ou comportamentos que um objeto pode realizar. Eles são representados por funções associadas ao objeto. Por exemplo, em um objeto "pessoa", um método pode ser "falar", que representa a ação de falar.
    * Instanciação: Para criar um objeto, podemos usar a sintaxe de objeto literal ou a função construtora. A sintaxe de objeto literal é a forma mais simples e direta de criar um objeto, enquanto a função construtora é usada para criar múltiplas instâncias de um mesmo tipo de objeto.
    * Encapsulamento: O encapsulamento é o princípio de ocultar os detalhes internos de um objeto e expor apenas o necessário para interagir com ele. Isso ajuda a proteger os dados e a garantir que o objeto seja usado corretamente.
    * Herança: A herança é o princípio de criar novos objetos com base em objetos existentes. Isso permite reutilizar código e criar hierarquias de objetos. Em JavaScript, a herança é implementada por meio do protótipo.
    * Polimorfismo: O polimorfismo é o princípio de permitir que objetos de diferentes classes sejam tratados como objetos da mesma classe. Isso é possível graças à herança e ao encapsulamento, permitindo que métodos sejam sobrescritos para fornecer comportamentos específicos para cada tipo de objeto.
    * Objetos em JavaScript são dinâmicos, o que significa que podemos adicionar, modificar ou remover propriedades e métodos a qualquer momento durante a execução do programa. Isso torna os objetos muito flexíveis e poderosos para modelar dados e comportamentos complexos.
*/

const iago = {
    nome: "Iago",
    idade: 25,
    altura: 1.82,

    descricao: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e minha altura é ${this.altura} metros.`);
    }
}

//acesso direto
console.log(iago.nome);

console.log("------------------------------------------------------------------------------------------------------------------------------");

iago.descricao();

console.log("------------------------------------------------------------------------------------------------------------------------------");

//acesso dinâmico
const atributo = "nome";
console.log(iago[atributo]);
console.log(iago["idade"]);
iago["sobrenome"] = "Silva";
console.log(iago.sobrenome);

console.log("------------------------------------------------------------------------------------------------------------------------------");

class Pessoa {
    nome;
    idade;

    descricao() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e minha altura é ${this.altura} metros.`);
    }
}

const marilia = new Pessoa();
marilia.nome = "Marilia";
marilia.idade = 25;
marilia.descricao();

console.log("------------------------------------------------------------------------------------------------------------------------------");

class Carro {
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    descricao() {
        console.log(`O carro é um ${this.marca} ${this.modelo} do ano ${this.ano}.`);
    }
}

const city = new Carro("Honda", "City", 2020);
city.descricao();

console.log("------------------------------------------------------------------------------------------------------------------------------");

class Humano {
    nome;
    idade; 
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2026 - idade;
    }
    descricao() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoNascimento}.`);
    }
    
}

function compararHumanos(h1, h2){
    if (h1.idade > h2.idade){
        console.log(`${h1.nome} é mais velho que ${h2.nome}`);
    }else if (h1.idade < h2.idade){
        console.log(`${h2.nome} é mais velho que ${h1.nome}`);
    }else{
        console.log(`${h1.nome} e ${h2.nome} têm a mesma idade`);
    }
}

const iago2 = new Humano("Iago", 25);
const marilia2 = new Humano("Marilia", 25);
compararHumanos(iago2, marilia2);

console.log("------------------------------------------------------------------------------------------------------------------------------");