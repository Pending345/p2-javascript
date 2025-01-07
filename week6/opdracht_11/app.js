let hunger = 100;
let energy = 100;
let happiness = 100;

const messageElement = document.getElementById("statusMessage");
const hungerbar = document.getElementById('hunger');
const energybar = document.getElementById('energy');
const happinessbar = document.getElementById('happiness');
const feed = document.getElementById('feed');
const sleep = document.getElementById('sleep');
const play = document.getElementById('play');

function updateStatus() {
    document.getElementById("hunger").textContent = hunger;
    document.getElementById("energy").textContent = energy;
    document.getElementById("happiness").textContent = happiness;
    
    if (hunger === 0 && energy === 0 && happiness === 0) {
        messageElement.textContent = "Je Tamagotchi is dood!";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Je Tamagotchi is gelukkig!";
        messageElement.style.color = "green";
    }
}
feed.addEventListener("click", () => {
    hunger = Math.min(hunger + 50, 100);
    updateStatus();
});
sleep.addEventListener("click", () => {
    energy = Math.min(hunger + 50, 100);
    updateStatus();
});
play.addEventListener("click", () => {
    happiness = Math.min(hunger + 50, 100);
    updateStatus();
});

setInterval(() => {
    if (hunger > 0) hunger--;
    if (energy > 0) energy--;
    if (happiness > 0) happiness--;
    updateStatus();
}, 1000);