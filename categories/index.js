const categories = document.querySelector('#categories')

function displayEasy () {
    fetch('http://localhost:3000/levels/easy')
    .then (resp => resp.json())
    .then (data => {
        const easy = document.querySelector('#easy')
        easy.textContent = "Recover"
        const easyChoice = document.querySelector("#easyChoice")
        easyChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/easy_questions.html"
        })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


function displayMedium() {
    fetch('http://localhost:3000/levels/medium')
    .then(resp => resp.json())
    .then(data => {
        const medium = document.querySelector('#medium')
        medium.textContent = "Polish"
        const medChoice = document.querySelector("#medChoice")
        medChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/med_questions.html"
        })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


function displayHard() {
    fetch('http://localhost:3000/levels/hard')
    .then(resp => resp.json())
    .then(data => {
        const hard = document.querySelector('#hard')
        hard.textContent = "Sharpen"
        const hardChoice = document.querySelector("#hardChoice")
        hardChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/hard_questions.html"
        })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

displayMedium()
displayEasy()
displayHard()