/*
objetivo 1: clicar e marcar o botão como selecionado
    passo 1: pegar botão no JS para verificar o clique
    passo 2: adicionar a classe "selecionado" no clique
    passe 3: se já houver um selecionado, remover a seleção

objetivo 2: mostrar informações ao clicar no botão
    passe 1: pegar as músicas no JS para mostrar ou esconder
    passo 2: adicionar a classe "selecionado"
    passe 3: se já houver um selecionado, remover a seleção
*/

// capturando botões e telas
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

// ativando o clique
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerSelecaoBotao();
        selecionarBotao(botao);

        removerSelecaoPersonagem();
        selecionarPersonagem(indice);
    });
});

// funções
// remove "selecionado" do botão
function removerSelecaoBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
};

// adiciona "selecionado" ao botão
function selecionarBotao(botao) {
    botao.classList.add("selecionado");
};

// remove "selecionado" da tela exibida
function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
};

// adiciona "selecionado" à tela correspondente ao botão
function selecionarPersonagem(indice) {
    personagens[indice].classList.add("selecionado");
}