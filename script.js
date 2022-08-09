/* PSUDOCODE

Game will be run fully from the console, 
1: create a function to select a random 

*/

const rpsChoices = ['Rock','Paper','Scissors'];
let playerSelection;

function getComputerChoice(){
    return rpsChoices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection){
    const formatChoice = playerSelection.toUpperCase();
    const comChoice = getComputerChoice();
    const tie = `It's a tie! You both chose ${playerSelection}!`;
    const win = `You win! ${playerSelection} beats ${comChoice}`;
    const lose = `You lose ${playerSelection} is beaten by ${comChoice}`
    switch(formatChoice){
        case 'ROCK':
            switch(comChoice){
                case 'Rock': console.log(tie);
                    return 'draw'
                case 'Paper': console.log(lose);
                    return 'com';
                case 'Scissors': console.log(win);
                    return 'player';
            }
        case 'PAPER':
            switch(comChoice){
                case 'Rock': console.log(win);
                    return 'player'
                case 'Paper': console.log(tie);
                    return 'draw';
                case 'Scissors': console.log(lose);
                    return 'com';
            }
        case 'SCISSORS':
            switch(comChoice){
                case 'Rock': console.log(lose);
                    return 'com'
                case 'Paper': console.log(win);
                    return 'player';
                case 'Scissors': console.log(tie);
                    return 'draw';
            }
        default:
            return 'Please enter Rock, Paper or Scissors'
    }
}

function playGame(numberOfRounds = 5){
    let playerWins = 0;
    let comWins = 0;
    let ties = 0;
    for(let i = 0; i < numberOfRounds; i++){
        switch(playRound(prompt())){
            case 'com':
                comWins++;
                break;
            case 'player':
                playerWins++;
                break;
            case 'draw':
                ties++;
                break
            default:
                alert('Round did not count, please enter Rock, Paper or Scissors')
                i--
        }
        console.log(`Player: ${playerWins} - Com: ${comWins} - Ties: ${ties}`)
    }
    console.log(`GAME OVER! Final Score: Player: ${playerWins} - Com: ${comWins} - Ties: ${ties}`)
}