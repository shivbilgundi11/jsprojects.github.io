//Variables...
let min = 0;
let sec = 0;
let ms = 0;

let timer = false;

//Click Functions...
function start(){
    timer = true;
    stopwatch();
};

function stop(){
    timer = false;
};

function reset(){
    timer = false;

    min = 0;
    sec = 0;
    ms = 0;

    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('mili').innerHTML = '00';
};


//stopwatch function...
function stopwatch(){

    if (timer == true) {
        ms = ms + 1;

        if(ms == 99){
            sec = sec + 1;
            ms = 0
        };

        if(sec == 59){
            min = min + 1;
            sec = 0;
            ms = 0
        };

        var minString = min;
        var secString = sec;
        var miliString = ms;

        if(minString < 10){minString = "0" + minString};
        if(secString < 10){secString = "0" + secString};
        if(miliString < 10){miliString = "0" + miliString};

        document.getElementById('mili').innerHTML = miliString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('min').innerHTML = minString;

        setTimeout('stopwatch()', 10);
    };
};
