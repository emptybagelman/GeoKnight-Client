function displayScore() {
    fetch("http://localhost:3000/scoreboard/current-player")
        .then(resp => resp.json())
        .then(data => {
            const scoreboard = data
            const usernameElement = document.querySelector('#current-player')
            const scoreElement = document.querySelector('#score')

            usernameElement.textContent = scoreboard["name"]
            scoreElement.textContent = scoreboard["score"]
        })
}

async function createUsername(e) {
    e.preventDefault()
    
    const data = {name: e.target.username.value}
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch("http://localhost:3000/scoreboard/current-player", options)

    
    if (response.status == 201) {
        e.target.username.value = ''
        alert("username created")
        location.reload()
    }

}

const form = document.querySelector("#create-username");
form.addEventListener("submit", createUsername);

displayScore()
