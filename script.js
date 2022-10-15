"use strict"
//elements
const check = document.querySelector(".chack");
const input = document.querySelector(".input-number");
const gussingText = document.querySelector(".gussing-text");
const gameCurAns = document.querySelector(".game-correct-answer");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".paly-again");

//variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

//display text
function displayGussingTest(text){
  gussingText.textContent = text;
}
//Chacking
check.addEventListener("click", function(){
  const inputNumber = Number(input.value);

  //when there is no input
  if(inputNumber) displayGussingTest("inter a valid number!");

  //when player wins
  else if (inputNumber === SECRET_NUMBER){
    displayGussingTest("correct answer!")
    gameCurAns.textContent = SECRET_NUMBER;

    gameCurAns.style.backgroundColor = "#222";
    document.body.style.backgroundColor = "teal";

    if(SCORE > HIGH_SCORE){
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  //when guess is wrong
   else if(inputNumber !== SECRET_NUMBER) {
    if(SCORE > 1){
      displayGussingTest(
        inputNumber > SECRET_NUMBER ? `too high` : `too low`
    
      );
      SCORE --;
      score.textContent = SCORE;
    
       } else{
    displayGussingTest("game over!")
    score.textContent = 0;
  

  }
}
});