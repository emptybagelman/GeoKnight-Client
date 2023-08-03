const player = {
    maxHP: 10,
    currHP: 10,
    attack: 5,
    name: "player",
    
    displayStats() {
      console.log(`Player - Max HP: ${this.maxHP}, Current HP: ${this.currHP}, Attack: ${this.attack}`);
    }
};

const maxHP = document.querySelector("#maxhp-disp");
const currHP = document.querySelector("#currhp-disp");
const attack = document.querySelector("#atk-disp");

maxHP.textContent = player.maxHP
currHP.textContent = player.currHP
attack.textContent = player.attack
