const boxes = document.querySelectorAll("#box");
const resetbtn = document.querySelector("#resetbtn");
const newGame = document.querySelector("#new-game");
const msgContainer = document.querySelector(".msgContainer");
const msg = document.querySelector("#msg");


let turnO = true;

function resetGame(){
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
    
} 
boxes.forEach(function(box){
    box.addEventListener('click',function(){
        if(turnO) {
            box.style.color = '#141E46'
            box.innerHTML = 'O'
            turnO = false;

         }else{
            box.style.color = '#FC4100';
            box.innerHTML = 'X'; 
            turnO = true
         }
         box.disabled = true;
         checkWinner();


        console.log('clicked');
    })
 })

const patterns = [[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]
]
function disabledButtons(){
    for(let box of boxes){
        box.disabled = true;
        
    }
}
function enableButtons(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

function ShowWinner(winner){
  msg.innerText = `Congratulations! The WINNER!🎉🥳 is ${winner}` ;
  msgContainer.classList.remove("hide");
}
function checkWinner(){
              
    patterns.forEach(function(pattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    if(val1 != "" && val2 != "" && val3 != "")
        if(val1 === val2 && val2=== val3){
            disabledButtons();
            ShowWinner(val1);
        } 
    })      
}  
resetbtn.addEventListener('click', ()=>{
   resetGame();
})
newGame.addEventListener('click',()=>{
    resetGame();
})
          