let gameStatus = document.createElement('p');
let string = document.createTextNode("Hello there.");
gameStatus.appendChild(string);
let main = document.getElementById('main');

main.appendChild(gameStatus);
gameStatus.innerText = "Choose wisely";

let stats = document.createElement('p');
main.appendChild(stats);

let userChoice, computerChoice;
let gamesCount = 0;
let winsCount = 0;
let tiesCount = 0;

function getComputerChoice() {
    return choice = Math.floor(Math.random() * 3);
};

function getUserChoice(val) {
    //0 - Rock, 1 - Paper, 2 - Scissors
    let user = val;
    gameController(user);
};

function determineWinner(user, computer) {
    console.log(`User: ${user}\n Computer: ${computer}`);

    if (user == computer) {
        return undefined;
    };

    if (user - computer >= 0){
        if (user - computer === 1) {
            return true;
        };
        return false;
    };

    if (computer - user >= 0){
        if (computer - user === 1) {
            return false;
        };
        return true;
    };
};

function updateStats(win) {
    if (win) winsCount++;
    gamesCount++;
    if (win === undefined) tiesCount++;
    stats.innerText = `Wins/Games: ${winsCount}/${gamesCount} Ties: ${tiesCount}`;
};

function endGame() {
    gamesCount = 0;
    winsCount = 0;
    tiesCount = 0;
    
    stats.innerText = `Wins/Games: ${winsCount}/${gamesCount} Ties: ${tiesCount}`;
    gameStatus.innerText += `Press 'Enter' to play again.`
    
    document.addEventListener('keydown', awaitReset = (e) => {
        if (e.code === "Enter") {
            resetGame()
        };
    });
};

function resetGame() {
    document.removeEventListener('keydown', awaitReset)
    buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.visibility = 'visible';
    });
    gameStatus.innerText = "Choose Wisely";
}

function gameController(user){
    //Get input
    computerChoice = getComputerChoice();
    userChoice = user;

    let win = determineWinner(userChoice, computerChoice)

    //Update score
    updateStats(win);
    gameStatus.innerText = `${win ? 'You win!' : 'I win!'}`;
    //Hide game choice buttons and display a play again button
    if (gamesCount >= 5)
    {
        document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('paper').style.visibility = 'hidden';
        document.getElementById('scissors').style.visibility = 'hidden';

        if (winsCount > (gamesCount / 2)) {
            gameStatus.innerText = `You have defeated me! You won ${winsCount} of the ${gamesCount} games.`;
            endGame();
        }
        else {
            gameStatus.innerText = `I am victorious! I won ${gamesCount - winsCount} of the ${gamesCount} games.`;
            endGame();
        }
    }
};