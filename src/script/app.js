window.onload = function() {
const path = window.location.pathname;

if (path.includes('d1.html')){
    this.alert('Boas-vindas ao nosso site!');
    let nome = this.prompt('Por favor digite seu nome:');
    let idade = this.prompt('Por favor digite a sua idade:');
    let numeroDeVendas = 50;
    let saldoDisponivel = 1000;
    let mensagemDeErro = 'Erro! Preencha todos os campos!';
    this.alert(mensagemDeErro);
    if (idade >= 18){
        this.alert('Pode tirar a habilitação de motorista.');
    }
};

if (path.includes('d2.html')){
    //Verificar Dia útil
    let diaDaSemana = this.prompt('Qual dia da semana é hoje?');
    if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
        this.alert('Bom fim de semana!')
    }
    else {
        this.alert('Boa semana!')
    }

    //Verificar número positivo ou negativo
    let numero = this.prompt('Digite um número:');
    if (numero > 0){
        this.alert('O número é positivo!');
    } else{
        this.alert('O número é negativo!');
    }

    //Sistema de pontuação
    let pontos = 0;
    if (pontos > 100){
        this.alert('Parabéns, você venceu o jogo!')
    } else{
        this.alert('Tente novamente para ganhar!')
    }

    //Saldo na conta
    let saldoDisponivel = 1000;
    this.alert(`O saldo disponível na conta é R$${saldoDisponivel}`)

    //Usuário
    let userName = this.prompt('Digite o seu nome');
    this.alert(`Seja bem-vindo, ${userName}!`)
} 

if (path.includes('d3.html')){

}

}

