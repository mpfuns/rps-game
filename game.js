// the computer pick their input option(it's randomly pick) 
function computerPlay(){
 let pick= Math.floor((Math.random()*2)+(Math.random()*3)+(Math.random()*2)+1)
 
  if (pick==3 || pick== 6){ return "rock"
}
 else if (pick==2 || pick ==5) { return "paper";
      
  } else { return "scissor";
      
  }
};


// the round play out

 function playRound(playerSelection, computerSelection){
    

//If the user input is rock and the computer input is a scissor, then the player wins.     

if(playerSelection=="rock" && computerSelection=="scissor"){
    alert ("You win, Rock beat Scissor.");
    return "You win, Rock beat Scissor.";
}
//If the user input is paper and the computer input is rock, then the player wins. 
else if(playerSelection=="paper" && computerSelection=="rock"){
    alert("You win, Paper beat Rock.");
    return "You win, Paper beat Rock.";
}
//If the user input is scissors and the computer input is paper, then the player wins.
else if(playerSelection=="scissor" && computerSelection=="paper"){
    alert("You win, Scissor beat Paper.");
    return "You win, Scissor beat Paper.";
}
//If the computer input is rock and the user input is a scissor, then the player wins. 
 else if(playerSelection=="scissor" && computerSelection=="rock"){
   alert("You lose, Rock beat Scissor.");
   return "You lose, Rock beat Scissor.";
}
//If the computer input is paper and the user input is rock, then the player wins. 
else if(playerSelection=="rock" && computerSelection=="paper"){
    alert ("You lose, Paper beat Rock.");
    return "You lose, Paper beat Rock.";
}
//If the computer input is scissors and the user input is paper, then the player wins.
else if(playerSelection=="paper" && computerSelection=="scissors"){
    alert("You lose, Scissor beat Paper.");
    return "You lose, Scissor beat Paper.";
}
//If the user input is equal to the computer input, then it's a tie. 
else{
    alert("You and the Computer are tied.");
    return "You and the Computer are tied.";
}
 };

 
// the player and computer input for each game
 function game (){
    for(let i = 0 ; i < 5; i++){
        const playerTurn =prompt("Rock,Paper, or Scissor?: ").toLocaleLowerCase();
        const computerTurn =computerPlay();
        console.log(playRound(playerTurn,computerTurn));  
    }

};


game();
 

