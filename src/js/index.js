const botaoMostrarProjetos = document.querySelector('.bnt-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projetos:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    
    mostrarMaisProjetos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}