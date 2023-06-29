// Global variables
const time_el = document.querySelector(".timer .timerDisplay");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const restart_btn = document.getElementById("restart");

let seconds = 0;
let interval = null;

// Event Listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
restart_btn.addEventListener("click", restart);
// Update the timer
function timer() {
    seconds++;

    // Format our time
    let hrs = Math.floor(seconds / (60 * 60));
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_el.innerText = `${hrs} : ${mins} : ${secs}`;
}


function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
    start_btn.classList.add("green-glow");
    setTimeout(() => start_btn.classList.remove("green-glow"), 300);
}


function stop() {
    clearInterval(interval);
    interval = null;
    stop_btn.classList.add("red-glow");
    setTimeout(() => stop_btn.classList.remove("red-glow"), 300);

}

function restart() {
    clearInterval(interval)
    seconds = 0;
    time_el.innerText = "00 : 00 : 00"
    restart_btn.classList.add("purple-glow");
    setTimeout(() => restart_btn.classList.remove("purple-glow"), 300);

}
