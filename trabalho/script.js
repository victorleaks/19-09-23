function startGame() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
  
    if (player1 && player2) {
      // Redireciona para a página do jogo, passando os nomes dos jogadores como parâmetros
      window.location.href = `stopots_game.html?player1=${player1}&player2=${player2}`;
    } else {
      alert('Por favor, preencha os nomes dos jogadores.');
    }
  }
  