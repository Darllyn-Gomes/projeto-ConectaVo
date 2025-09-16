document.addEventListener('DOMContentLoaded', () => {
  function getPontos() {
    return parseInt(localStorage.getItem('pontosConecta')) || 0;
  }

  function setPontos(pontos) {
    localStorage.setItem('pontosConecta', pontos);
    updateDisplay();
  }

  function updateDisplay() {
    const pontosDisplay = document.getElementById('pontos-conecta');
    if (pontosDisplay) {
      pontosDisplay.textContent = getPontos();
    }
  }

  window.addPontos = function(valor) {
    const pontosAtuais = getPontos();
    const novosPontos = pontosAtuais + valor;
    setPontos(novosPontos);
    alert(`Parabéns! Você ganhou ${valor} Pontos Conecta! Agora você tem ${novosPontos} pontos.`);
    checkRecompensas(novosPontos);
  }

  function checkRecompensas(pontos) {
    const listaTitulos = document.getElementById('lista-titulos');
    if (!listaTitulos) return;

    const titulos = {
      100: "Aprendiz Digital",
      300: "Navegador da Internet",
      500: "Mestre Online",
    };

    listaTitulos.innerHTML = '';

    for (const pontoNecessario in titulos) {
      if (pontos >= parseInt(pontoNecessario)) {
        const titulo = titulos[pontoNecessario];
        const li = document.createElement('li');
        li.textContent = `🏆 ${titulo}`;
        li.classList.add('list-group-item');
        listaTitulos.appendChild(li);
      }
    }
  }

  updateDisplay();
  checkRecompensas(getPontos());
});