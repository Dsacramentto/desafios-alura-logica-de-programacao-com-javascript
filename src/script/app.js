window.onload = function() {
const path = window.location.pathname;

if (path.includes('d1.html')){
    this.alert('Boas-vindas ao nosso site!')
    let nome = this.prompt('Por favor digite seu nome:')
    let idade = this.prompt('Por favor digite a sua idade:')
    let numeroDeVendas = 50;
    let saldoDisponivel = 1000;
    let mensagemDeErro = 'Erro! Preencha todos os campos!';
    this.alert(mensagemDeErro)
    if (idade >= 18){
        this.alert('Pode tirar a habilitação de motorista.')
    }
};

if (path.includes('d2.html')){
    let diaDaSemana = this.prompt('Qual dia da semana é hoje?');
    if (diaDaSemana == 'Sabado'){
        this.alert('Bom fim de semana!')
    }
    else {
        this.alert('Boa semana!')
    }
} 

}

