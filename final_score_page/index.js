import {createPlayerInStorage} from "../player.js";

function displayScore() {
    fetch("https://geoknightbackend.onrender.com/scoreboard/current-player")
        .then(resp => resp.json())
        .then(data => {
            
            const scoreboard = data
            const usernameElement = document.querySelector('#current-player')
            const scoreElement = document.querySelector('#score')

            usernameElement.textContent = scoreboard["name"]
            scoreElement.textContent = Number(sessionStorage.getItem("score"));
        })
}

// async function createUsername(e) {
//     e.preventDefault()
    
//     const data = {name: e.target.name.value}
//     const options = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }

//     const response = await fetch("https://geoknightbackend.onrender.com/scoreboard/current-player", options)

    
//     if (response.status == 201) {
//         e.target.username.value = ''
//         location.reload()
//     }

// }

async function createUsername(e) {
    e.preventDefault()

    const name = e.target.username.value;
    const score = sessionStorage.getItem("score");
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            score:score
        })
    }
    fetch("https://geoknightbackend.onrender.com/scoreboard",options)
        .then(resp => resp.json())
        .then(data => {
            const createBtn = document.getElementById("submit");
            const leaderboardLabel = document.getElementById("leaderboard");
            leaderboardLabel.textContent = name;
            createBtn.disabled = "true";
            createBtn.style.filter = "brightness(0.5)"
            createBtn.style.cursor = "default";
        })
}

document.getElementById("homepage").addEventListener("click", () => {
    createPlayerInStorage();
    window.location.href = "../index.html";
})

const form = document.querySelector("#create-username");
form.addEventListener("submit", createUsername);

const h3 = document.getElementById("scoreID");

h3.textContent = sessionStorage.getItem("score");

addEventListener("load", displayScore())