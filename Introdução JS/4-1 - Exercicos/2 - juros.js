/** 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return valorEtiqueta - (valorEtiqueta * desconto);
}

function aplicarJuros(valor, juros) {
    return valorEtiqueta + (valorEtiqueta * juros);
}

const descontoDebito = 0.10;
const descontoDinheiroPix = 0.15
const juros = 0.1;

const valorEtiqueta = 20;
const formaPagamento = 2;

if (formaPagamento === 1){
    console.log(aplicarDesconto(valorEtiqueta, descontoDebito));
}else if (formaPagamento === 2){
    console.log(aplicarDesconto(valorEtiqueta, descontoDinheiroPix));
}else if(formaPagamento === 3){
    console.log(valorEtiqueta);
}else{
    console.log(aplicarJuros(valorEtiqueta, juros));
}
