

setInterval(removeClass, 500);

function removeClass(){
    document.getElementById('hours').classList.remove('bounce');
    document.getElementById('minutes').classList.remove('bounce');
    document.getElementById('seconds').classList.remove('bounce');
};

setInterval(updateTime, 1000);


function updateTime(){
    let date = new Date();

    let milliseconds = date.getMilliseconds();
    if(seconds >= 59){
        document.getElementById('minutes').classList.add('bounce');
    }
    if(minutes >= 59){
        document.getElementById('hours').classList.add('bounce');
    }

    


    hours = date.getHours();
    document.getElementById('hours').innerHTML = (hours <= 9) ? '0'+hours : hours;

    minutes = date.getMinutes();
    document.getElementById('minutes').innerHTML = (minutes <= 9) ? '0'+minutes : minutes;

    seconds = date.getSeconds();
    document.getElementById('seconds').innerHTML = (seconds <= 9) ? '0'+seconds : seconds;
    document.getElementById('seconds').classList.add('bounce');
    
};

updateTime();