let user =0;
let comp =0;
const choise = document.querySelectorAll(".items");
const msg = document.querySelector("#msg");
const my_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const comp_random = ()=>{
    let options = ["rock","paper","sissors"];
    let comp_ch = Math.floor(Math.random()*3);
    return options[comp_ch];
}
const play = (user_ch)=>{
    console.log("your choise is ",user_ch);
    let comp_ch = comp_random();
    console.log("computer choise is ",comp_ch);


    if(comp_ch==user_ch)
    {
        console.log("Its draw");
        msg.innerText ="Game is Draw!";
        msg.style.backgroundColor ="rgba(255, 255, 255,1)";
    }
    else if(comp_ch == "sissors" && user_ch == "rock" || comp_ch == "rock" && user_ch == "paper" ||comp_ch == "paper" && user_ch == "sissors" )
    {
        console.log("You Win");
        msg.innerText ="You WIN!";
        msg.style.backgroundColor ="rgba(0, 255, 0,0.5)";
        user++; 
        my_score.innerText=user;
    }
    else
    {
        console.log("You Lose");
        msg.innerText ="You LOSE!";
        msg.style.backgroundColor ="rgba(255, 0, 0,0.5)";
        comp++; 
        comp_score.innerText=comp;
    }

}
choise.forEach((choise)=>
    choise.addEventListener("click",()=>{
        let user_ch = choise.getAttribute("id");
        play(user_ch);
})
)