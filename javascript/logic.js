const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

// Play Game
function play(event) {
    // console.log(event.target.id);
    restart.style.display = 'inline-block';
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    // console.log(playerChoice, computerChoice, winner);
    showWinner(winner, computerChoice);
}

// Get Computer Choice
function getComputerChoice() {
    const random = Math.random();
    if(random < 0.34) {
        return 'rock';
    }
    else if (random <= 0.67) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// Get game winner
function getWinner(player, computer) {
    if(player === computer) {
        return 'draw';
    }
    else if (player === 'rock') {
        if(computer === 'paper') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (player === 'paper') {
        if(computer === 'scissors') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (player === 'scissors') {
        if(computer === 'rock') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        // Player score
        scoreboard.player++;
        // Show modal result
        result.innerHTML = 
        `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }
    else if (winner === 'computer') {
        // Computer score
        scoreboard.computer++;
        // Show modal result
        result.innerHTML = 
        `<h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }
    else {
        result.innerHTML = 
        `<h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }
    // Show Score
    score.innerHTML = 
    `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

// Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = 
    `<p>Player: 0</p>
    <p>Computer: 0</p>`
}

// Clear Modal
function clearModal(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);