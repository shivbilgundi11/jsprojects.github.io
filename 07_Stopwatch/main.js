let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0, ];

let timeReference = document.querySelector('.timer-screen');

let interval = null;



//Adding Events to the buttons...

//Event for Start Button...
document.getElementById('start').addEventListener('click', () => {
    if(interval !== null){
        clearInterval(interval);
    };
    interval = setInterval(displayTime, 10);
});

//Event for stop button...
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

//Event for reset button...
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);

    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeReference.innerHTML = '00 : 00 : 00 : 000';
});

function displayTime(){
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            };
        };
    };


    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '0' + milliseconds : milliseconds;

    timeReference.innerText = `${h} : ${m} : ${s} : ${ms}`;
};