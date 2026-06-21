/*Faça um algoritmo que dado o peso (em kg) e a altura (em metros) de um adulto calcule o seu IMC e imprima a sua classificação conforme a tabela abaixo:
 *
 * IMC = peso / (altura * altura);
 *
 * Classificação:
 * - IMC menor que 18.5, abaixo do peso;
 * - IMC entre 18.5 e 25, peso normal;
 * - IMC entre 25 e 30, acima do peso;
 * - IMC acima de 30, obesidade;
 */

function calculo(peso, altura){
    return peso / (altura * altura);
}

function classificacao(IMC){
     if (IMC < 18.5){
        return ("Abaixo do Peso");
    }else if (IMC > 18.5 && IMC < 25){
        return ("Peso Normal");
    }else if (IMC > 25 && IMC < 30){
        return ("Acima do peso");
    }else{
        return ("Obesidade");
    }
}

(function (){
        
    const peso = 110;
    const altura = 1.87;
    const IMC = calculo(peso, altura);

    console.log(IMC);
    console.log(classificacao(IMC));
})();