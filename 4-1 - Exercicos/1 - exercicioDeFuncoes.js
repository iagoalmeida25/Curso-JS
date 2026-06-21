function writeYourName(nome){
    console.log('Meu nome é ' + nome);
}

writeYourName('Iago');
writeYourName('Marilia');

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Maior de idade');
    }else{
        console.log('Menor de idade');
    }
}

verificarIdade(18);

/*(function (){
    const idade = 18
    console.log(verificarIdade(idade));
})();*/