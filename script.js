let tg = window.Telegram.WebApp;
tg.ready();

let user = tg.initDataUnsafe.user;
document.getElementById("user").innerText = "Salam, " + user.first_name;

let score = 0;
const pixel = document.getElementById("pixel");
const gameArea = document.getElementById("game-area");

function clickPixel() {
    score++;
    document.getElementById("score").innerText = score;
    movePixel();
}

function movePixel() {
    const maxX = gameArea.clientWidth - pixel.clientWidth;
    const maxY = gameArea.clientHeight - pixel.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    pixel.style.left = newX + "px";
    pixel.style.top = newY + "px";
}