const scoreboard = document.querySelector('#scoreboard')

const addScore = (data) => {
    const li = document.createElement('li')
    li.textContent = data.name + ": " + data.score
    li.style.textTransform = "capitalize"
    scoreboard.appendChild(li)
}

function displayScoreboard() {
    fetch("http://localhost:3000/scoreboard")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(score => {
                addScore(score)
            });
    })
}

displayScoreboard()