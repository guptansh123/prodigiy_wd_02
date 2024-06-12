let timer; // Variable to hold the interval timer
let running = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function updateTime() {
    const elapsed = Date.now() - startTime + elapsedTime;
    const time = new Date(elapsed);

    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const seconds = time.getUTCSeconds().toString().padStart(2, "0");

    document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now();
        timer = setInterval(updateTime, 1000);
        running = true;
        document.getElementById("startStop").textContent = "Stop";
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    laps = [];
}

function lap() {
    if (running) {
        laps.push(document.getElementById("display").textContent);
        const lapList = document.getElementById("laps");
        const li = document.createElement("li");
        li.textContent = `Lap ${laps.length}: ${laps[laps.length - 1]}`;
        lapList.appendChild(li);
    }
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
