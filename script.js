let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice")
let user_score = document.querySelector("#user-score")
let comp_score = document.querySelector("#comp-score")
let message = document.querySelector("#msg")

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        userchoice = choice.getAttribute("id")
        // console.log("user choice",userchoice);
        playgame(userchoice);
    });
});

const playgame = (userchoice) =>{
    console.log("user choice =",userchoice);
    // genrating computer choice
    const compchoice = getcompchoice();
    console.log("comp choice",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        userwin = true;
        if(userchoice === "rock"){
            // compchoice = paper,scissors
            userwin = compchoice === "paper" ? false : true ;
        }else if(userchoice === "paper"){
            // compchoice = rock, scissors
            userwin = compchoice === "scissors" ? false : true ;
        }else{
            userwin = compchoice === "rock" ? false : true ;
        }

        ShowWinner(userwin,userchoice,compchoice);
    }

}

const ShowWinner = (userwin,userchoice,compchoice) => {
    console.log(userwin);
    if(userwin){
        userscore++;
        user_score.innerText = userscore;
        message.innerText = `you won!,your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green"
    }else{
        compscore++;
        comp_score.innerText = compscore;
        message.innerText = `you loss!,${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor = "red";
    }
}

const drawgame = () =>{
    // console.log("gmae is draw");
    message.innerText = "Game is draw, play again";
    message.style.backgroundColor = "black"
}

const getcompchoice = () =>{
    let options = ["rock","paper","scissors"]
    let randidx = Math.floor(Math.random()*3)
    return(options[randidx]);
}