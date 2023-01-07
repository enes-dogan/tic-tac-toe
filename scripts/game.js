function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please enter player names.');
    return;
    // return don't needed because alert() method already blocks further code execution
  } else {
    gameAreaElement.style.display = 'block';
  }
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol; //starts with players[0]
  event.target.classList.add('disabled');
  switchPlayer();
}
