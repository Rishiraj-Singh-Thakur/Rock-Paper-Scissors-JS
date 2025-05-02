window.onload = () =>{
let userscore = 0;
let computrscore = 0;

// computer.innerText = computrscore;
// user.innerText = userscore;

const choices = document.querySelectorAll("#rock ,#paper,#scissor");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const resetButten = document.querySelector("#reset");

    const massage = document.querySelector(".massage")

const gencompchoice = () => {
        const choicess = ["rock","paper","scissor"];
        const index = Math.floor(Math.random()*3);
        return choicess[index];

}
user.innerText = userscore;
computer.innerText = computrscore;
msg.innerText = "Play your move."


const drawgame = () => {
    msg.innerText = "Game was draw! Yours and Computer choice is same.";
    massage.style.backgroundColor = "#fed766";
}
const showWinner = (compchoice,userchoice,userWin) => {
    if(userWin){
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        userscore++;
        user.innerText = userscore;
        massage.style.backgroundColor = "green";
    }else{
        console.log("computer was win");
        msg.innerText = `You lose! your ${compchoice} beats ${userchoice}`;
        computrscore++;
        computer.innerText = computrscore;
        massage.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{
    console.log("userchoice =" ,userchoice);
    const compchoice = gencompchoice();
    console.log("compuchoice = " ,compchoice);

    //if else condition

    if(compchoice===userchoice){
        drawgame ();
    }else{
        let userWin = true;
        if(userchoice === "rock") {
            userWin =   compchoice === "paper"?false : true;
        }
        else if(userchoice === "paper"){
            userWin =   compchoice === "rock"? true : false;
        }
        else if (userchoice === "scissor")  {

            userWin = compchoice === "paper" ? true : false;
        }
    
      showWinner(compchoice,userchoice,userWin);
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
})
 resetButten.addEventListener("click",()=>{
    userscore = 0;
    user.innerText = userscore;
    computrscore = 0;
    computer.innerText = computrscore;

   })

};