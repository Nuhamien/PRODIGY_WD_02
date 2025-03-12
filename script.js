let startTime = 0;
let elapsedTime = 0;
let animationFrameId;
let isRunning = false;

function updateTime() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let totalMilliseconds = elapsedTime;
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);

    let milliseconds = totalMilliseconds % 1000;
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours;

    
    document.getElementById("min").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("sec").textContent = seconds.toString().padStart(2, '0');
    document.getElementById("ms").textContent = milliseconds.toString().padStart(3, '0').slice(0, 2);
    

    animationFrameId = requestAnimationFrame(updateTime);
}

let loop = document.getElementById("loop");
let begin = document.getElementById("begin");
let finish = document.getElementById("finish");
let again = document.getElementById("again");
let lapList = document.getElementById("lapList");



begin.addEventListener("click", function () {
if (!isRunning) {
// Start or Resume
startTime = Date.now() - elapsedTime; 
animationFrameId = requestAnimationFrame(updateTime);
begin.textContent = "Stop";
} else {
// Stop (Pause)
cancelAnimationFrame(animationFrameId);
begin.textContent = "Start";
}
isRunning = !isRunning; // Toggle the state
});

// Reset the stopwatch
again.addEventListener("click", function() {
    cancelAnimationFrame(animationFrameId);
    elapsedTime = 0;
    isRunning = false;
   
    document.getElementById("min").textContent = "00";
    document.getElementById("sec").textContent = "00";
    document.getElementById("ms").textContent = "00";
    
    begin.textContent = "Start";
    lapList.innerHTML = ''; // Clear lap list
});

// Record a lap
loop.addEventListener("click", function() {
    let totalMilliseconds = elapsedTime;
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);

    let milliseconds = totalMilliseconds % 1000;
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours;

    let lapItem = document.createElement("li");
    lapItem.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0').slice(0, 2)}`;
   
    lapList.appendChild(lapItem);
   
    
});
loop.addEventListener("click", function() {
    console.log("Button clicked!");
    document.querySelector(".container").classList.add("active");
    document.querySelector(".stopwatchContainer").classList.add("centered");
    document.getElementById("lapList").lapList.classList.toggle("expanded");});
again.addEventListener("click", function() {
    console.log("Button clicked!");
    document.querySelector(".container").classList.remove("active");
    document.querySelector(".stopwatchContainer").classList.remove("centered");
    document.getElementById("lapList").lapList.classList.remove("expanded");});
    begin.addEventListener("click", function() {
        document.getElementById("lapList").lapList.classList.remove("list");
    });
   