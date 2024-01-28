let displayMsg=document.querySelector(".msg");
let playerScore=document.querySelector("#player-score");
let computerScore=document.querySelector("#computer-score");
let userScore=0;
let compScore=0;

const logic = (userMove,compMove) => {
    
    console.log("User chose:", userMove);
    console.log("Computer chose:", compMove);

    if (compMove === userMove) {
        console.log("TIE");
        displayMsg.textContent="TIE!!";
    } else if (
        (compMove === "rock" && userMove === "paper") ||
        (compMove === "paper" && userMove === "scissors") ||
        (compMove === "scissors" && userMove === "rock")
    ) {
        console.log("User wins");
        displayMsg.textContent="User wins!!";
        userScore++;
        playerScore.textContent=userScore;
    } 
    else {
        console.log("Computer wins");
        displayMsg.textContent="Computer wins!!";
        compScore++;
        computerScore.textContent=compScore;
    }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}
    
const choices = document.querySelectorAll(".moves div");
choices.forEach((moves) => {
    moves.addEventListener("click", () => {
        const userId = moves.getAttribute("class");
        console.log("userId:", userId); 
        const compMove = genCompChoice();
        logic(userId, compMove);
    });
});



let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    playerScore.textContent=userScore;
    computerScore.textContent=compScore;
    displayMsg.textContent="Play Your Move!!";
});