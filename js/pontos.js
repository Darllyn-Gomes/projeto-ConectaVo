document.addEventListener('DOMContentLoaded', () => {
    // 1. Funções para gerenciar os pontos
    function getPontos() {
        // Pega os pontos do localStorage, ou 0 se não existir
        return parseInt(localStorage.getItem('pontosConecta')) || 0;
    }

    function setPontos(pontos) {
        // Salva a quantidade de pontos no localStorage
        localStorage.setItem('pontosConecta', pontos);
        updateDisplay();
    }

    // 2. Função para atualizar a exibição na página
    function updateDisplay() {
        const pontosDisplay = document.getElementById('pontos-conecta');
        if (pontosDisplay) {
            pontosDisplay.textContent = getPontos();
        }
    }

    // 3. Função para adicionar pontos (exemplo de como será chamada)
    window.addPontos = function(valor) {
        const pontosAtuais = getPontos();
        const novosPontos = pontosAtuais + valor;
        setPontos(novosPontos);
        alert(`Parabéns! Você ganhou ${valor} Pontos Conecta! Agora você tem ${novosPontos} pontos.`);
        checkRecompensas(novosPontos);
    }

    // 4. Função para verificar e exibir recompensas
    function checkRecompensas(pontos) {
        const listaTitulos = document.getElementById('lista-titulos');
        if (!listaTitulos) return;

        const titulos = {
            100: "Aprendiz Digital",
            300: "Navegador da Internet",
            500: "Mestre Online",
        };

        listaTitulos.innerHTML = ''; // Limpa a lista antes de atualizar

        for (const pontoNecessario in titulos) {
            if (pontos >= parseInt(pontoNecessario)) {
                const titulo = titulos[pontoNecessario];
                const li = document.createElement('li');
                li.textContent = `🏆 ${titulo}`;
                listaTitulos.appendChild(li);
            }
        }
    }

    // Inicia a exibição dos pontos quando a página carrega
    updateDisplay();
    checkRecompensas(getPontos());
});