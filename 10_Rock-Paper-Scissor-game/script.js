let result = document.getElementById('result');

var score = 0;

document.getElementById('rock').addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            document.getElementById('c-input').innerHTML = '&#9994';
            break;
        case 2:
            document.getElementById('c-input').innerHTML = '&#9995';
            break;
        case 3:
            document.getElementById('c-input').innerHTML = '&#9996';
            break;
    }

    document.getElementById('p-input').innerHTML = '&#9994';
    if(randNum == 1){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'Draw 😂'
    }
    if(randNum == 2){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Lost 😐'
        score -= 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
    if(randNum == 3){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Win 😍'
        score += 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
});


document.getElementById('paper').addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            document.getElementById('c-input').innerHTML = '&#9994';
            break;
        case 2:
            document.getElementById('c-input').innerHTML = '&#9995';
            break;
        case 3:
            document.getElementById('c-input').innerHTML = '&#9996';
            break;
    }

    document.getElementById('p-input').innerHTML = '&#9995';

    if(randNum == 2){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'Draw 😂'
    }
    if(randNum == 3){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Lost 😐'
        score -= 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
    if(randNum == 1){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Win 😍'
        score += 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
});


document.getElementById('scissor').addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            document.getElementById('c-input').innerHTML = '&#9994';
            break;
        case 2:
            document.getElementById('c-input').innerHTML = '&#9995';
            break;
        case 3:
            document.getElementById('c-input').innerHTML = '&#9996';
            break;
    }

    document.getElementById('p-input').innerHTML = '&#9996';


    if(randNum == 3){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'Draw 😂'
    }
    if(randNum == 1){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Lost 😐';
        score -= 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
    if(randNum == 2){
        document.getElementById('result').classList.remove('hide');
        document.getElementById('result').innerText = 'You Win 😍'
        score += 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
});


document.getElementById('play-again').addEventListener('click', () => {
    window.location.reload();
});