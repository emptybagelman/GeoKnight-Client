import { updateLoop, resetLoop,increaseDifficulty,addToScore,updateStat} from "../player.js";

let selectedAnswer = null;
let questionData = null; 

function displayMediumQuestion () {
    const displayedquestion = document.querySelector('h3')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    fetch ('https://geoknightbackend.onrender.com/levels/medium/random')
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

    const choiceElement = document.getElementById(`option${selectedAnswer.slice(-1)}`);

    if (selectedAnswer) {
        updateLoop();
        if (questionData) {
            let correctAnswer = questionData.correctChoice;
            const correctElement = document.getElementById(`option${correctAnswer.slice(-1)}`)
            let isCorrect = checkAnswer(correctAnswer, selectedAnswer); 
            if (isCorrect) {
                addToScore();
                choiceElement.style.backgroundColor = "#34cb44";
                choiceElement.style.boxShadow = "0 -5px 0 0 #185d1f inset";
                updateStat("currHP",8);
            } else {
                console.log(correctElement.textContent)
                //wrong answer
                choiceElement.style.backgroundColor = "#ff0008";
                choiceElement.style.boxShadow = "0 -5px 0 0 #690003 inset";

                //right answer
                correctElement.style.backgroundColor = "#34cb44";
                correctElement.style.boxShadow = "0 -5px 0 0 #185d1f inset";
            }

            // Proceed to next page (battle or categories)
            if(sessionStorage.getItem("loop") == 3){
                resetLoop();
                increaseDifficulty();
                setTimeout(function() {window.location.href = "../battle/index.html"},2000)
                // window.location.href = "../battle/index.html";
            }else{
                setTimeout(function() {window.location.href = "../choice_page/categories.html"},2000)
                // window.location.href = "../choice_page/categories.html";
            }
            
        } else {
            console.log('Question data not available.');
        }
    } else {
        window.alert('Please select an answer before submitting.');
    }
});

displayMediumQuestion();