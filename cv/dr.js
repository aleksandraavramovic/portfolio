 
  const player1 = [];
  const player2 = [];
  
  function giveCard(player) {
    const number = parseInt(document.getElementById('cardNumber').value);
    const suit = document.getElementById('cardSuit').value;
  
    if (number === 11 || number < 1 || number > 14) {
      alert("Unesite broj karte između 1 i 14, bez 11.");
      return;
    }
  
    const card = { number, suit };
  
    if (player === 1 && player1.length < 4) {
      player1.push(card);
      displayCards(player1, 'player1Cards');
    } else if (player === 2 && player2.length < 4) {
      player2.push(card);
      displayCards(player2, 'player2Cards');
    }
  }
  
  function displayCards(player, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    player.forEach(card => {
      container.innerHTML += `<div class="card">${card.number}<br>${card.suit}</div>`;
    });
  }
  
  function checkWinner() {
    if (player1.length < 4 || player2.length < 4) {
      alert("Oba igrača moraju imati po 4 karte.");
      return;
    }
  
    const p1Score = getPokerScore(player1);
    const p2Score = getPokerScore(player2);
  
    const winnerText = p1Score > p2Score
      ? "Pobednik je igrač 1"
      : p1Score < p2Score
      ? "Pobednik je igrač 2"
      : "Nerešeno";
  
    document.getElementById('winner').innerText = winnerText;
  }
  
  function getPokerScore(cards) {
    const values = cards.map(c => c.number).sort((a, b) => a - b);
    const suits = cards.map(c => c.suit);
    const counts = {};
    values.forEach(v => counts[v] = (counts[v] || 0) + 1);
    const frequencies = Object.values(counts).sort((a, b) => b - a);
    const isFlush = suits.every(s => s === suits[0]);
    const isStraight = values.every((v, i, arr) => i === 0 || v === arr[i - 1] + 1);
  
    if (isFlush && isStraight) return 800 + Math.max(...values); // Straight flush
    if (frequencies[0] === 4) return 700 + getKeyByValue(counts, 4); // Four of a kind
    if (frequencies[0] === 3 && frequencies[1] === 2) return 600 + getKeyByValue(counts, 3); // Full house
    if (isFlush) return 500 + Math.max(...values); // Flush
    if (isStraight) return 400 + Math.max(...values); // Straight
    if (frequencies[0] === 3) return 300 + getKeyByValue(counts, 3); // Three of a kind
    if (frequencies[0] === 2 && frequencies[1] === 2) return 200 + getHighestPair(counts); // Two pair
    if (frequencies[0] === 2) return 100 + getKeyByValue(counts, 2); // One pair
  
    return Math.max(...values); // High card
  }
  
  function getKeyByValue(obj, val) {
    return parseInt(Object.keys(obj).find(key => obj[key] === val));
  }
  
  function getHighestPair(obj) {
    return Math.max(...Object.keys(obj).filter(k => obj[k] === 2).map(Number));
  }