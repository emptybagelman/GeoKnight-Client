const scoreboard = document.querySelector("#scoreboard")
    scoreboard.addEventListener("click", (event) => {
        event.preventDefault()
        window.location.href = "../scoreboard/scoreboard.html"
    })