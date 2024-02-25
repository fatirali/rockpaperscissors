

function getComputerChoice() {
  var rps = ["rock", "paper", "scissors"];
  var index = Math.floor(Math.random() * rps.length);
  // console.log(index);
  // console.log(rps[index]);
  return rps[index];
;
}

// --- Console only getPlayerChoice function
// function getPlayerChoice () {
//     let choice = prompt("rock, paper, or scissors?").toLowerCase();
//     if (choice == "rock" || choice == "paper" || choice =="scissors") {
//         return choice;
//     }
//     else {
//         alert("Incorrect input, please refresh page and select either rock, paper, or scissors");
//         return "Incorrect input, please refresh page and select either rock, paper, or scissors";
//     }
// };

// -- New getPlayerChoice function that is triggered once 
// either RPS buttons are clicked. 
// Round should be played once the button is clicked.
function getPlayerChoice (button) {
    var playerSelection = button.target.id;
    console.log("Player picked" + " " + playerSelection);
    var computerSelection = getComputerChoice();
    console.log("Computer picked" + " " + computerSelection);
    var round = playRound(playerSelection, computerSelection);
    console.log(round);

// Add in tallying logic to getPlayerChoice function. 
  if (round == "Computer wins") {
    computerTally = computerTally + 1;
    document.getElementById("cT").innerText = computerTally;
    console.log("player score is" + " " + playerTally);
    console.log("computer score is" + " " + computerTally);
    if (computerTally === 5) {
        document.getElementById("winner").innerText = "COMPUTER WINS! The game has ended. Please Refresh page to play again"
        var buttons = document.querySelectorAll("button");
        for (let button of buttons) {
            button.disabled = true;
          };
        return console.log("COMPUTER WINS! The game has ended. Please Refresh page to play again")
    };
  }
  else if (round == "Player wins") {
    playerTally = playerTally + 1;
    document.getElementById("pT").innerText = playerTally;
    console.log("player score is" + " " + playerTally);
    console.log("computer score is" + " " + computerTally);
    if (playerTally === 5) {
        document.getElementById("winner").innerText = "PLAYER WINS! The game has ended. Please Refresh page to play again"
        var buttons = document.querySelectorAll("button");
        for (let button of buttons) {
            button.disabled = true;
          };
        return console.log("PLAYER WINS! The game has ended. Please Refresh page to play again")
    }
  };

};



function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.getElementById("winner").innerText = "This match is a tie";
    return "this match is a tie";
    // playerSelection = getPlayerChoice();
    // console.log("Player selection is" + " " + playerSelection);
    // computerSelection = getComputerChoice();
    // console.log("Computer selection is" + " " + computerSelection);
    // return playRound(playerSelection, computerSelection);
  } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
    document.getElementById("winner").innerText = "Computer wins";
    return "Computer wins";
  } else if ((playerSelection == "rock") & (computerSelection == "scissors")) {
    document.getElementById("winner").innerText = "Player wins";
    return "Player wins";
  } else if ((playerSelection == "paper") & (computerSelection == "scissors")) {
    document.getElementById("winner").innerText = "Computer wins";
    return "Computer wins";
  } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
    document.getElementById("winner").innerText = "Player wins";
    return "Player wins";
  } else if ((playerSelection == "scissors") & (computerSelection == "rock")) {
    document.getElementById("winner").innerText = "Computer wins";
    return "Computer wins";
  } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
    document.getElementById("winner").innerText = "Player wins";
    return "Player wins";
  } else {
    return "someone won, I don't know who";
  }

}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  // alert ("you are about to play a best of 5 series of rock paper scissors vs the computer. Choose you play on the screen"); // Alert user, that you are about to play best of five game

  // ROUND 1
  var playerSelection = getPlayerChoice();
  console.log("Player selection is" + " " + playerSelection);


  var computerSelection = getComputerChoice();
  console.log("Computer selection is" + " " + computerSelection);

  var round = playRound(playerSelection, computerSelection);
  console.log(round);
  if (round == "Computer wins") {
    computerTally = computerTally + 1;
  } else if (round == "Player wins") {
    playerTally = playerTally + 1;
  }
  console.log("player score is" + " " + playerTally);
  console.log("computer score is" + " " + computerTally);

  // ROUND 2

//   playerSelection = getPlayerChoice();
//   console.log("Player selection is" + " " + playerSelection);

//   computerSelection = getComputerChoice();
//   console.log("Computer selection is" + " " + computerSelection);

//   var roundTwo = playRound(playerSelection, computerSelection);
//   console.log(roundTwo);
//   if (roundTwo == "Computer wins") {
//     computerTally = computerTally + 1;
//   } else if (roundTwo == "Player wins") {
//     playerTally = playerTally + 1;
//     console.log(playerTally);
//   }
//   console.log("player score is" + " " + playerTally);
//   console.log("computer score is" + " " + computerTally);
//   alert("Round 2 is Complete, Moving on to round 3!!");

  // ROUND 3

//   playerSelection = getPlayerChoice();
//   console.log("Player selection is" + " " + playerSelection);

//   computerSelection = getComputerChoice();
//   console.log("Computer selection is" + " " + computerSelection);

//   var roundThree = playRound(playerSelection, computerSelection);
//   console.log(roundThree);
//   if (roundThree == "Computer wins") {
//     computerTally = computerTally + 1;
//   } else if (roundThree == "Player wins") {
//     playerTally = playerTally + 1;
//   }
//   console.log("player score is" + " " + playerTally);
//   console.log("computer score is" + " " + computerTally);
//   alert("Round 3 is Complete, Moving on to round 4!!");

  // ROUND 4

//   playerSelection = getPlayerChoice();
//   console.log("Player selection is" + " " + playerSelection);

//   computerSelection = getComputerChoice();
//   console.log("Computer selection is" + " " + computerSelection);

//   var roundFour = playRound(playerSelection, computerSelection);
//   console.log(roundFour);
//   if (roundFour == "Computer wins") {
//     computerTally = computerTally + 1;
//   } else if (roundFour == "Player wins") {
//     playerTally = playerTally + 1;
//   }
//   console.log("player score is" + " " + playerTally);
//   console.log("computer score is" + " " + computerTally);
//   alert("Round 4 is Complete, Moving on to round 5!!");

  // ROUND 5

//   playerSelection = getPlayerChoice();
//   console.log("Player selection is" + " " + playerSelection);

//   computerSelection = getComputerChoice();
//   console.log("Computer selection is" + " " + computerSelection);

//   var roundFive = playRound(playerSelection, computerSelection);
//   console.log(roundFive);
//   if (roundFive == "Computer wins") {
//     computerTally = computerTally + 1;
//   } else if (roundFive == "Player wins") {
//     playerTally = playerTally + 1;
//   }
//   console.log("player score is" + " " + playerTally);
//   console.log("computer score is" + " " + computerTally);

//   if (playerTally == computerTally) {
//     alert(" THIS GAME IS A DRAW ");
//     console.log(" THIS GAME IS A DRAW ");
//   } else if (playerTally > computerTally) {
//     alert(" PLAYER WINS ");
//     console.log(" PLAYER WINS ");
//   } else if (playerTally < computerTally) {
//     alert(" COMPUTER WINS ");
//     console.log(" COMPUTER WINS ");
//   }

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
alert(
  "you are about to play a best of 5 series of rock paper scissors vs the computer. Choose you play on the screen"
); 


// Alert user, that you are about to play best of five game
// Make RPS UI version
// 1. alert User that game is about to begin.
// 2. Ask user to select  R, P or S on screen
// 3. Add click event listeners to all 3 buttons
// 4. Start game when play clicks on one of the 3 RPS button
// 5. Record answer from human. Generate answer from computer using function. 
// 6. Check who wins. 
// 7. Add tally for the winner. Display tally
// 8. play 4 more games. 
// 9. Whichever player wins. Say ___ wins! 
// 10. 


//----
// 1. Get computerSelection
// 2. Get playerSelection
// 3. playRound to determine winner of 1 round
// 4. Play game to determine winner of 5 rounds, best 2 out of 3 wins

window.onload = function () {
var buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
  // and for each one we add a 'click' listener
  for (let button of buttons) {
    var a = button.id
    console.log(a);
    button.addEventListener("click", getPlayerChoice);
  };
};



