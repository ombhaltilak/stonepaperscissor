let scoreyou=0;
let scorecomputer=0;
const result=document.querySelector("#msg");
const point1=document.querySelector("#scoreyou");
const point2=document.querySelector("#scorecomputer");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndex= Math.floor(Math.random()*3);
    return options[randIndex];
};

const drawGame=()=>{
    console.log("game draw")
};

const showWins=(userWin)=>{
    if(userWin){
        scoreyou++;
        console.log("you win");
        result.innerText="You Win";
        result.style.backgroundColor = "green";    }
    else{
        scorecomputer++;
        console.log("you loss");
        result.innerText="Computer Win";
        result.style.backgroundColor = "red";
        }
        point1.innerText=scoreyou;
        point2.innerText=scorecomputer;
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
    const compChoice=genComputerChoice();
    console.log("computer choice=",compChoice);
    let userWin = true; // Define userWin here

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        if(userChoice==="rock"){
            userWin=compChoice=="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice=="scissors"? false:true;
        }
        else {
            userWin=compChoice=="rock"? false:true;
        }
        
    }
    showWins(userWin);

};
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice)
        
    });
});