let boxes = document.querySelectorAll(".box");
let resetBt = document.querySelector("#reset");
let newGameBt = document.querySelector("#new_but");
let msgCon = document.querySelector(".msg_con");
let msg = document.querySelector("#msg");

let  turn0 = true; //playerx , player0

const winpatterns = [
    [0 ,1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{

    turn0 = true;
    enableBoxes();
    msgCon.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
     checkWinner();
    });

});

const disableBoxes = () => {
    for(let box of boxes)
        box.disabled = true;
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
      msg.innerText = `Congratulations ~ Winner is ${winner}`; 
      msgCon.classList.remove("hide");  
      disableBoxes();
}

const checkWinner = () => {
    for(let patterns of winpatterns){
     let posival1 = boxes[patterns[0]].innerText;
     let posival2 = boxes[patterns[1]].innerText;
     let posival3 = boxes[patterns[2]].innerText;

     if(posival1 != "" && posival2 != "" && posival3 != ""){
        if(posival1 === posival2 && posival2 === posival3){
            console.log("winner" , posival1);
            showWinner(posival1);
        }

     }
    }
}
newGameBt.addEventListener("click" , resetGame);
resetBt.addEventListener("click" , resetGame);