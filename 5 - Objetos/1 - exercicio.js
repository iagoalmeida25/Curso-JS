/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    //Definição de construtor: O construtor é um método especial em uma classe que é chamado automaticamente quando um objeto é criado a partir dessa classe. 
    // Ele é usado para inicializar as propriedades do objeto e pode receber parâmetros para configurar o estado inicial do objeto. 
    // No exemplo acima, o construtor recebe os parâmetros marca, cor e gastoMedioPorKm para definir as propriedades correspondentes do objeto Carro. 
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const gol = new Carro("Gol", "Azul", 1 / 16);
console.log(gol.calcularGasto(100, 5.79));
