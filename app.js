function sortear() {
    let quantidadeInput = document.getElementById('quantidade');
    let quantidade = parseInt(quantidadeInput.value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Calcula o máximo possível de números distintos
    let maxQuantidade = ate - de + 1;

    // Ajusta o valor da quantidade caso ultrapasse o limite
    if (quantidade > maxQuantidade) {
        quantidade = maxQuantidade;
        quantidadeInput.value = maxQuantidade; // Atualiza o campo no front-end
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotaoAtivar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);  
}

function alterarStatusBotaoAtivar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar')
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado')
        botaoReiniciar.classList.add('container__botao')
    } 
    let botaoSortear = document.getElementById('btn-sortear')
    if (botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.remove('container__botao')
        botaoSortear.classList.add('container__botao-desabilitado')
    } 
}

function alterarStatusBotaoDesativar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar')
    if (botaoReiniciar.classList.contains('container__botao')) {
        botaoReiniciar.classList.remove('container__botao')
        botaoReiniciar.classList.add('container__botao-desabilitado')
    } 
    let botaoSortear = document.getElementById('btn-sortear')
    if (botaoSortear.classList.contains('container__botao-desabilitado')) {
        botaoSortear.classList.remove('container__botao-desabilitado')
        botaoSortear.classList.add('container__botao')
    } 
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Nenhum número sorteado ainda</label>';
alterarStatusBotaoDesativar();

}