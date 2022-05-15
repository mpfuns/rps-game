// the computer pick their input option(it's randomly pick) 
function computerPlay() {
    let pick = Math.floor((Math.random() * 2) + (Math.random() * 3) + (Math.random() * 2) + 1)

    if (pick == 3 || pick == 6) {
        return "rock"
    }
    else if (pick == 2 || pick == 5) {
        return "paper";

    } else {
        return "scissor";

    }
};

const container = document.querySelector('#container');
const playerscore = document.querySelector('#you');
const computerscore = document.querySelector('#computer');
const won = document.querySelector('#won');


//adding  up score 
function addpoint(score) {
    score.innerText = parseInt(score.innerText) + 1;

    

};

//finding the winner
function tracking(score1, score2) {
    
    let winner = document.createElement('div');
    winner.classList.add('content');
    won.appendChild(winner);

    player= parseInt(score1.innerText);
    computer=parseInt(score2.innerText);
    
        if ( player== 5) {
          winner.textContent = "You are the winner.";
    
        } 
        else if (computer == 5) {
           winner.textContent="Computer is the winner.";
        }
        else{
            
        }
    


    
};


// the round play out

function playRound(playerSelection, computerSelection) {
    const result = document.createElement('div');
    result.classList.add('content');
    container.appendChild(result);

    //If the user input is rock and the computer input is a scissor, then the player wins.     

    if (playerSelection == "rock" && computerSelection == "scissor") {
        result.textContent = "You win, Rock beat Scissor.";
        return addpoint(playerscore);
    }
    //If the user input is paper and the computer input is rock, then the player wins. 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "You win, Paper beat Rock.";
        return addpoint(playerscore);
    }
    //If the user input is scissors and the computer input is paper, then the player wins.
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        result.textContent = "You win, Scissor beat Paper.";
        return addpoint(playerscore);
    }
    //If the computer input is rock and the user input is a scissor, then the player wins. 
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        result.textContent = "You lose, Rock beat Scissor.";
        return addpoint(computerscore);
    }
    //If the computer input is paper and the user input is rock, then the player wins. 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "You lose, Paper beat Rock.";
        return addpoint(computerscore);
    }
    //If the computer input is scissors and the user input is paper, then the player wins.
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.textContent = "You lose, Scissor beat Paper.";
        return addpoint(computerscore);
    }
    //If the user input is equal to the computer input, then it's a tie. 
    else {
        result.textContent = "You and the Computer are tied.";
        
    }




};




const buttons = document.querySelectorAll('button');

// the player and computer input for each game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        tracking(playerscore, computerscore);
    });
});




