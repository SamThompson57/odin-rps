/* PSUDOCODE

Game will be run fully from the console, 
1: create a function to select a random 

*/

const rpsChoices = ['ROCK','PAPER','SCISSORS'];
let playerSelection;

function getComputerChoice(){
    return rpsChoices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection){
    console.log('The Game Has Started')
    console.log(this)
    const formatChoice = this.id.toUpperCase();
    const comChoice = getComputerChoice();
    const tie = `It's a tie! You both chose ${formatChoice}!`;
    const win = `You win! ${formatChoice} beats ${comChoice}`;
    const lose = `You lose ${formatChoice} is beaten by ${comChoice}`
    switch(formatChoice){
        case 'ROCK':
            switch(comChoice){
                case 'ROCK': 
                    results.textContent = tie;
                    return 'draw'
                case 'PAPER': 
                    results.textContent = lose;
                    scoreUpdate('com')
                    return 'com';
                case 'SCISSORS': 
                    results.textContent = win;
                    scoreUpdate('player')
                    return 'player';
            }
        case 'PAPER':
            switch(comChoice){
                case 'ROCK': 
                    results.textContent = win;;
                    scoreUpdate('player')
                    return 'player'
                case 'PAPER': 
                    results.textContent = tie;
                    return 'draw';
                case 'SCISSORS': 
                    results.textContent = lose;
                    scoreUpdate('com')
                    return 'com';
            }
        case 'SCISSORS':
            switch(comChoice){
                case 'ROCK': 
                    results.textContent = lose;
                    scoreUpdate('com')
                    return 'com'
                case 'PAPER': 
                    results.textContent = win;
                    scoreUpdate('player')
                    return 'player';
                case 'SCISSORS': 
                    results.textContent = tie;                    
                    return 'draw';
            }
        default:
            return 'Please enter Rock, Paper or Scissors';
    }
}

const rock = document.querySelector('#Rock');
rock.addEventListener('click', playRound);

const paper = document.querySelector('#Paper');
paper.addEventListener('click', playRound);

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', playRound)

const results = document.querySelector('#results');
const score = document.querySelector('#score');

let playerWins = 0;
let comWins = 0;

function scoreUpdate(winner){
    switch(winner){
        case 'com':
            comWins ++;
            break;
        
        case 'player':
            playerWins ++;
            break;
    }
    score.textContent = `SCORE: Player: ${playerWins} CPU: ${comWins}`;
    if(playerWins >= 5 || comWins >= 5 ){
        alert(`GAME OVER! FINAL SCORE: Player: ${playerWins} CPU: ${comWins}`)
        playerWins = 0;
        comWins = 0;
        score.textContent = '';
    }


}


/*function playGame(numberOfRounds = 5){
    
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
        console.log(`Player: ${playerWins} - Com: ${comWins} - Ties: ${ties}`);
    }
    console.log(`GAME OVER! Final Score: Player: ${playerWins} - Com: ${comWins} - Ties: ${ties}`);
}*/