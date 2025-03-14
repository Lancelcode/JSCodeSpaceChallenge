// Rock, Paper, Scissors Game

document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll(".choice");
    const resultDisplay = document.getElementById("result");
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let userChoice = button.innerText;
            let computerChoice = choices[Math.floor(Math.random() * 3)];
            let result = getResult(userChoice, computerChoice);
            
            userChoiceDisplay.textContent = `You: ${userChoice}`;
            computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
            resultDisplay.textContent = result;
        });
    });

    function getResult(user, computer) {
        if (user === computer) {
            return "It's a draw!";
        }
        if (
            (user === "Rock" && computer === "Scissors") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissors" && computer === "Paper")
        ) {
            return "You win!";
        }
        return "You lose!";
    }
});
