let quantidadeAlugados = 1;
let quantidadeDisponíveis = 2;
function alterarStatus(numeroDoBotao) {
    let botao = document.getElementById(`game-${numeroDoBotao}`);
    let elemento = botao.querySelector('a');
    let temaImagem = botao.querySelector('div');
    if (elemento.text == 'Alugar') {
        elemento.classList.add('dashboard__item__button--return');
        elemento.text = 'Devolver';
        temaImagem.classList.add('dashboard__item__img--rented');
        quantidadeAlugados += 1;
        quantidadeDisponíveis -= 1;
    } else {
        elemento.classList.remove('dashboard__item__button--return');
        temaImagem.classList.remove('dashboard__item__img--rented');
        alert(`O jogo ${botao.querySelector('p').textContent} foi devolvido.`);
        elemento.text = 'Alugar';
        quantidadeAlugados -= 1;
        quantidadeDisponíveis += 1;
    }
    console.log(`Quantidade de jogos disponíveis: ${quantidadeDisponíveis}`);
    console.log(`Quantidade de jogos alugados: ${quantidadeAlugados}`);
}
