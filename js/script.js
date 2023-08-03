const handObj = {
  rock: "./assets/Rock.png",
  paper: "./assets/Paper.png",
  scissor: "./assets/Scissors.png",
};
function human_choice(hands) {
  // alert(hands);
  let human_choice_image = document.getElementById("human_choice");
  human_choice_image.src = handObj[hands];
  console.log(human_choice_image);
  computer_choice(hands);
}
function computer_choice(hands) {
  const bot_choice = ["rock", "paper", "scissor"];
  let random_number = Math.floor(Math.random() * 3);
  let cp_choice = bot_choice[random_number];
  let computer_choice_image = document.getElementById("computer_choice");
  computer_choice_image.src = handObj[cp_choice];
  refree(hands, cp_choice);
}

function refree(hands, cp_choice) {
  if (hands == "rock" && cp_choice == "scissor") {
    let decision = document.getElementById("decision");
    decision.innerText = "Computer Won";
  }
  if (hands == "rock" && cp_choice == "paper") {
    decision.innerText = "You Won";
    score++;
    setScore(score);
  }
  if (hands == "rock" && cp_choice == "rock") {
    decision.innerText = "Draw";
  }
  if (hands == "paper" && cp_choice == "paper") {
    decision.innerText = "Draw";
  }
  if (hands == "paper" && cp_choice == "rock") {
    decision.innerText = "You Won";
    score++;
    setScore(score);
  }
  if (hands == "paper" && cp_choice == "scissor") {
    decision.innerText = "Computer Won";
  }
  if (hands == "scissor" && cp_choice == "paper") {
    decision.innerText = "You Won";
    score++;
    setScore(score);
  }
  if (hands == "scissor" && cp_choice == "rock") {
    decision.innerText = "Computer Won";
  }
  if (hands == "scissor" && cp_choice == "scissor") {
    decision.innerText = "Draw";
  }
}
function setDecision(ref_decision) {
  let decision = document.getElementById("decision");
  decision.innerText = ref_decision;
  let result_board = document.getElementById("result_board");
  result_board.style.display = "flex";
  let hands = document.getElementById("hands");
  hands.style.display = "none";
}
function reset() {
  let result_board = document.getElementById("result");
  result_board.style.display = "none";
  let hands = document.getElementById("hands");
  hands.style.display = "flex";
}

function setScore(score) {
  let score_tag = document.getElementById("score").value;
  score_tag.innerHTML = score;
}
