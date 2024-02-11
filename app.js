let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto) { 
    let campo =  document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

 function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p' , 'escolha um número entre 1 a 10');
 }

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou! ');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('P' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

     } else {
        if (chute > numeroSecreto) { 
            exibirTextoNaTela('P' , 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p' , 'o numero secreto é maior');
        }
      tentativas++;
      limparcampo();
     
    }

}

function gerarNumeroAleatorio() {
  let numeroeEscolhido = parseInt( Math.random() * numeroLimite + 1) ;
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
     }

     if (listaDeNumerosSorteados.includes(numeroeEscolhido)) {
         return gerarNumeroAleatorio();
         
     } else {
        listaDeNumerosSorteados.push(numeroeEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroeEscolhido;    
    }
    
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
     
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('dissable', true);

}
