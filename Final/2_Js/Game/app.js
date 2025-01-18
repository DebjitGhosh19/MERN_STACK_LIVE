function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else if (randomNumber > 2 && randomNumber <= 3) {
    return "Stump";
  }
}

function getResult(userMove, computerChoice) {
  if (userMove === "Bat") {
    if (computerChoice === "Bat") {
      score.tie++;
      return "tie";
    } else if (computerChoice === "Ball") {
      score.win++;
      return "User Win";
    } else if (computerChoice === "Stump") {
      score.loss++;
      return "Copmuter Win";
    }
  } else if (userMove === "Ball") {
    if (computerChoice === "Ball") {
      score.tie++;
      return "tie";
    } else if (computerChoice === "Stump") {
      score.win++;
      return "User Win";
    } else if (computerChoice === "Bat") {
      score.loss++;
      return "Copmuter Win";
    }
  } else {
    if (computerChoice === "Stump") {
      score.tie++;
      return "tie";
    } else if (computerChoice === "Bat") {
      score.win++;
      return "User Win";
    } else if (computerChoice === "Ball") {
      score.loss++;
      return "Copmuter Win";
    }
  }
}
let scoreStr = localStorage.getItem("Score");
let score
reset(scoreStr);
function reset(scoreStr){
    score=scoreStr?JSON.parse(scoreStr):{
        win: 0,
        loss: 0,
        tie: 0,
      };  
    score.displayScore = function () {
      return `Win ${score.win} Loss ${score.loss} tie ${score.tie}`;
    };
    showResult();
}


function showResult(userMove, computerChoice, result) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.getElementById('user-move').innerText=
  userMove !== undefined ?`You have Chosen ${userMove}.`:''
  document.getElementById('computer-move').innerText=
  computerChoice!==undefined?`computer Choice: ${computerChoice}.`:'';
  document.getElementById('result').innerText=
  result!==undefined?result:'';
  document.getElementById('score').innerText=`${score.displayScore()}`
 
}
