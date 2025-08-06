"Use strict";

// Dom Variables
let resultTagline=document.querySelector(".result");
let userscoresE= document.querySelector(".userscores");
let computerscoresE= document.querySelector(".computerscores");
let rockBtn=document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");

const choices=["rock","paper","scissor"];
let userscores=0;
let computerscores=0;
// Logic
const palyGame= (e) =>{
    let userMove=e.target.id;
    // Computer Move

    let index =Math.floor(Math.random() * 3);
    let computerMove= choices[index];
    // console.log(userMove,computerMove);
    

    resultTagline.classList.remove("hide");
    // Game lose win logic
    if( userMove===computerMove){
        resultTagline.innerHTML="Game Tie!";
    }
    else if(
        (userMove==="rock" && computerMove==="scissor")||
        (userMove==="paper" && computerMove==="rock") ||
        (userMove==="scissor" && computerMove==="paper")
    ){
        userscores++;
        resultTagline.innerHTML= `You Win!${userMove} beat ${computerMove}`;
    }
    else{
        computerscores++;
        resultTagline.innerHTML= `Computer Wins! ${computerMove} beat ${userMove}`;
    }
    userscoresE.innerHTML=userscores;
    computerscoresE.innerHTML=computerscores;
};
// Event listners
rockBtn.addEventListener("click",palyGame);
paperBtn.addEventListener("click",palyGame);
scissorBtn.addEventListener("click",palyGame);