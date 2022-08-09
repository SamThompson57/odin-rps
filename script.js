/* PSUDOCODE

Game will be run fully from the console, 
1: create a function to select a random 

*/

const rpsChoices = ['Rock','Paper','Scissors'];

function getComputerChoice(){
    return rpsChoices[Math.floor(Math.random()*3)]
}