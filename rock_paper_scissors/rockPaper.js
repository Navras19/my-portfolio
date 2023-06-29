let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetButton = document.getElementById("reset-button")


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function capitalisedWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors"

}



function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomNumber = Math.floor(Math.random() * 4);
    const winEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${capitalisedWord(user)} ${randomWin[randomNumber]} ${capitalisedWord(computer)}. You Win! ${winEmojis[randomNumberEmoji]}`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}


function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomNumber = Math.floor(Math.random() * 4);
    const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 7);
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${capitalisedWord(computer)} ${randomWin[randomNumber]} ${capitalisedWord(user)}. You Lose! ${loseEmojis[randomNumberEmoji]}`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}




function draw(user, computer) {
    const tieEmojis = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"];
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${capitalisedWord(user)} matches ${capitalisedWord(computer)}. It's a tie! ${tieEmojis[randomNumberEmoji]}`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;


    }
}

game();

const resetScores = () => {
    computerScore = 0;
    computerScore_span.innerHTML = computerScore
    userScore = 0;
    userScore_span.innerHTML = userScore;

};


resetButton.addEventListener('click', () => resetScores());


function main() {

    rock_div.addEventListener("click", () => game("rock"));

    paper_div.addEventListener("click", () => game("paper"));



    scissors_div.addEventListener("click", () => game("scissors"));

}

main();
