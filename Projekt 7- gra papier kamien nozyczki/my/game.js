const gameSummary = {
    gameNumbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}


const hands = [...document.querySelectorAll('.select img')];


const selectHand = (e) => {
    game.playerHand = e.target.dataset.option;
    // console.log(game.playerHand = e.target.dataset.option);
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = `0 0 0 4px yellow`;

}
const aiChoice = () => {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;

}

const gameResult = (player, ai) => {
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return 'win';
    } else {
        return 'lose';
    }
}
const showResult = (player, ai, result) => {
    document.querySelector(`[data-summary="your-choice"]`).textContent = player;
    document.querySelector(`[data-summary="ai-choice"]`).textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.gameNumbers;

    if (result === `win`) {
        document.querySelector(`[data-summary="who-win"]`).textContent = `Ty Wygrałes`;
        document.querySelector(`[data-summary="who-win"]`).style.color = `green`;
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    } else if (result === `lose`) {
        document.querySelector(`[data-summary="who-win"]`).textContent = `Wygrał komputer`;
        document.querySelector(`[data-summary="who-win"]`).style.color = `red`;
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    } else if (player === ai) {
        document.querySelector(`[data-summary="who-win"]`).textContent = `Remis`;
        document.querySelector(`[data-summary="who-win"]`).style.color = `grey`;
    }
}

const finishGame = (e) => {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}



const startGame = () => {
    if (!game.playerHand) {
        alert('najpierw proszę wybrać !');
        return;
    }
    game.aiHand = aiChoice();
    const checkResult = gameResult(game.playerHand, game.aiHand);
    showResult(game.playerHand, game.aiHand, checkResult);
    finishGame();


}


document.querySelector('button.start').addEventListener('click', startGame);
hands.forEach(hand => hand.addEventListener('click', selectHand));