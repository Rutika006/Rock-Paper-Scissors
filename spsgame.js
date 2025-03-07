let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    console.log(choice);
    
choice.addEventListener("click", ()=>{
const userChoice=choice.getAttribute("id")
// console.log("Choice was clicked",userChoice);
playGame(userChoice)
});
});


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate comp choice
    const compChoice=genCompChoice();
    console.log("Computer choice is",compChoice);
    let result = "";
    if(userChoice===compChoice){
        //Draw game
        drawGame();
        result = "It's a draw!";
    }
    else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "You lose!";
        compScore++;
    }
    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${compChoice}. Result: ${result}`;
    updateScores();
   }


const genCompChoice=()=>{
//rock,paper,scissor
const options=["rock","paper","scissors"];
 const randomIndex=Math.floor(Math.random()*3)
 return options[randomIndex];
}

const drawGame=()=>{
    console.log("Game was draw.");
    
}

const  updateScores=()=>{
    document.getElementById("userScore").innerText = userScore; // Updates user score
    document.getElementById("compScore").innerText = compScore; // Updates computer score
};