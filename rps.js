
let gameStatus = document.createElement('p');
let string = document.createTextNode("Hello there.");
gameStatus.appendChild(string);
let main = document.getElementById('main');

main.appendChild(gameStatus);
gameStatus.innerText = "Choose wisely";

let stats = document.createElement('p');
main.appendChild(stats);
stats.innerText = `Games: 0 Wins: 0 Ties: 0`

let userChoice, computerChoice;

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
    console.log('Game done.');
};

function gameController(user){
    //Display buttons
    

    //Get input
    computerChoice = getComputerChoice();
    userChoice = user;

    if (userChoice == computerChoice) {
        gameStatus.innerText = "It's a tie! Choose again.";
    };

    let win = determineWinner(userChoice, computerChoice)
    

    //Update score
    updateStats(win);
    stats.innerText = `Win: ${win} You: ${userChoice} Me: ${computerChoice}`;
    //Hide game choice buttons and display a play again button
};