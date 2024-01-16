function getComputerChoice () {
    var rps = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * rps.length);
    // console.log(index);
    // console.log(rps[index]);
    return rps[index];
};


function getPlayerChoice () {
    let choice = prompt("rock, paper, or scissors?").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice =="scissors") {
        return choice;
    }
    else {
        alert("Incorrect input, please refresh page and select either rock, paper, or scissors");
        return "Incorrect input, please refresh page and select either rock, paper, or scissors";
    }
};

// function choices () {
//     var playerSelection = getPlayerChoice ();
//     console.log("Player selection is" + " " + playerSelection);
    
//     var computerSelection = getComputerChoice ();
//     console.log("Computer selection is" + " " + computerSelection);

//     return {playerSelection, computerSelection}
// }


function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
         console.log("this match is a tie");
        playerSelection = getPlayerChoice();
        console.log("Player selection is" + " " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("Computer selection is" + " " + computerSelection);
        return playRound(playerSelection, computerSelection);
    }

    else if(playerSelection == "rock" & computerSelection == "paper"){
        return "Computer wins";
    }

    else if(playerSelection == "rock" & computerSelection == "scissors"){
        return "Player wins"
    }

    else if(playerSelection == "paper" & computerSelection == "scissors"){
        return "Computer wins"
    }

    else if(playerSelection == "paper" & computerSelection == "rock"){
        return "Player wins"
    }

    else if(playerSelection == "scissors" & computerSelection == "rock"){
        return "Computer wins"
    }

    else if(playerSelection == "scissors" & computerSelection == "paper"){
        return "Player wins"
    }
    else {
        return "someone won, I don't know who"
    };
};

// console.log(playRound(playerSelection, computerSelection));

function game() {

    alert ("you are about to play a best of 5 series of rock paper scissors vs the computer"); // Alert user, that you are about to play best of five game

    // ROUND 1

    var playerSelection = getPlayerChoice ();
    console.log("Player selection is" + " " + playerSelection);

    var computerSelection = getComputerChoice ();
    console.log("Computer selection is" + " " + computerSelection);

    var roundOne = playRound(playerSelection, computerSelection);
    console.log(roundOne)
        if (roundOne == "Computer wins") {
            computerTally = computerTally + 1; 
        }

        else if (roundOne == "Player wins") {
            playerTally = playerTally+1 ; 
        }
    console.log("player score is" + " " + playerTally)
    console.log("computer score is" + " " + computerTally)
    alert("Round 1 is Complete, Moving on to round 2!!")


    // ROUND 2 

    playerSelection = getPlayerChoice ();
    console.log("Player selection is" + " " + playerSelection);

    computerSelection = getComputerChoice ();
    console.log("Computer selection is" + " " + computerSelection);

    var roundTwo = playRound(playerSelection, computerSelection);
    console.log(roundTwo)
        if (roundTwo == "Computer wins") {
            computerTally = computerTally + 1; 
        }

        else if (roundTwo == "Player wins") {
            playerTally = playerTally + 1 ; 
            console.log(playerTally)
        }
    console.log("player score is" + " " + playerTally)
    console.log("computer score is" + " " + computerTally)
    alert("Round 2 is Complete, Moving on to round 3!!")
    
    // ROUND 3

    playerSelection = getPlayerChoice ();
    console.log("Player selection is" + " " + playerSelection);

    computerSelection = getComputerChoice ();
    console.log("Computer selection is" + " " + computerSelection);

    var roundThree = playRound(playerSelection, computerSelection);
    console.log(roundThree)
        if (roundThree == "Computer wins") {
            computerTally = computerTally + 1; 
        }

        else if (roundThree == "Player wins") {
            playerTally = playerTally+1 ; 
        }
    console.log("player score is" + " " + playerTally)
    console.log("computer score is" + " " + computerTally)
    alert("Round 3 is Complete, Moving on to round 4!!")


    // ROUND 4

    playerSelection = getPlayerChoice ();
    console.log("Player selection is" + " " + playerSelection);

    computerSelection = getComputerChoice ();
    console.log("Computer selection is" + " " + computerSelection);

    var roundFour = playRound(playerSelection, computerSelection);
    console.log(roundFour)
        if (roundFour == "Computer wins") {
            computerTally = computerTally + 1; 
        }

        else if (roundFour == "Player wins") {
            playerTally = playerTally+1 ; 
        }
    console.log("player score is" + " " + playerTally)
    console.log("computer score is" + " " + computerTally)
    alert("Round 4 is Complete, Moving on to round 5!!")

    // ROUND 5

    playerSelection = getPlayerChoice ();
    console.log("Player selection is" + " " + playerSelection);

    computerSelection = getComputerChoice ();
    console.log("Computer selection is" + " " + computerSelection);

    var roundFive = playRound(playerSelection, computerSelection);
    console.log(roundFive)
        if (roundFive == "Computer wins") {
            computerTally = computerTally + 1; 
        }

        else if (roundFive == "Player wins") {
            playerTally = playerTally+1 ; 
        }
    console.log("player score is" + " " + playerTally)
    console.log("computer score is" + " " + computerTally)

    if (playerTally == computerTally){
        alert (" THIS GAME IS A DRAW ")
        console.log(" THIS GAME IS A DRAW ")
    } 

    else if (playerTally > computerTally) {
        alert (" PLAYER WINS ")
        console.log(" PLAYER WINS ")
    }

    else if (playerTally < computerTally) {
        alert (" COMPUTER WINS ")
        console.log(" COMPUTER WINS ")
    }


    // Play first game. 
        // record the winner
        // Add tally to player vs computer total
    // Play second game
        // record the winner
        // Add tally to player vs computer total
    // Repeat loop above 3 more times

}

let playerTally = 0;
let computerTally = 0;
game();




// 1. Get computerSelection
// 2. Get playerSelection
// 3. playRound to determine winner of 1 round
// 4. Play game to determine winner of 5 rounds, best 2 out of 3 wins 



