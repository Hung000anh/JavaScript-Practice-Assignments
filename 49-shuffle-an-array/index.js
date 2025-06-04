const cards = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠',
  '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const shuffledCards = [...cards];
shuffle(shuffledCards);

const originalDiv = document.getElementById('original-cards');
const shuffledDiv = document.getElementById('shuffled-cards');

originalDiv.innerHTML = cards.map(card => `<span>${card}</span>`).join('');
shuffledDiv.innerHTML = shuffledCards.map(card => `<span>${card}</span>`).join('');

console.log('Original:', cards);
console.log('Shuffled:', shuffledCards);
