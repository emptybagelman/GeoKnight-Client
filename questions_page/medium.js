let selectedAnswer = null;
let questionData = null; 

function displayMediumQuestion () {
    const displayedquestion = document.querySelector('h3')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    fetch ('http://localhost:3000/levels/medium/random')
    .then (resp => resp.json())
    .then (data => {
        questionData = data;
        displayedquestion.textContent = questionData.question
        option1.textContent = questionData.choice1
        option2.textContent = questionData.choice2
        option3.textContent = questionData.choice3
        option4.textContent = questionData.choice4

        option1.addEventListener("click", () => selectedAnswer = "choice1")
        option2.addEventListener("click", () => selectedAnswer = "choice2")
        option3.addEventListener("click", () => selectedAnswer = "choice3")
        option4.addEventListener("click", () => selectedAnswer = "choice4")
    })
    .catch (err => {
        console.log(err)
    })
}

function checkAnswer(correctAnswer, selectedAnswer) {
    return correctAnswer === selectedAnswer;
}

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (selectedAnswer) {
        if (questionData) {
            let correctAnswer = questionData.correctChoice;
            let isCorrect = checkAnswer(correctAnswer, selectedAnswer); 
            if (isCorrect) {
                window.alert('Correct!');
                // Player stat change
                player.maxHP += 4;
                player.currHP += 4;
            } else {
                window.alert('Wrong answer!');
            }
        } else {
            console.log('Question data not available.');
        }
    } else {
        window.alert('Please select an answer before submitting.');
    }
    window.location.href = "../choice_page/categories.html";
});

displayMediumQuestion();
