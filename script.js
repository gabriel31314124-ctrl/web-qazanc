let tg = window.Telegram.WebApp;
tg.ready();
let user = tg.initDataUnsafe.user;
document.getElementById("user").innerText = "Salam, " + user.first_name;
let score = 0;
function addPoint() {
  score++;
  document.getElementById("score").innerText = score;
}
