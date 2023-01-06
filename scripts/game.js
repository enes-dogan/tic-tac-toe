function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please enter player names.');
    return;
    // return don't needed because alert() method already blocks further code execution
  } else {
    gameAreaElement.style.display = 'block';
  }
}
