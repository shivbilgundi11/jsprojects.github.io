let cells = document.querySelectorAll('.cell');
let statusCheck = document.querySelector('#statusCheck');
let restartBtn = document.getElementById('restartbtn');

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let options = ["", "", "", "", "", "", "", "", ""];
let running = false;
let currentPlayer = "X";

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    statusCheck.textContent = `${currentPlayer}'s turn`;
    running = true;
};


function cellClicked(){
    let cellIndex = this.getAttribute('CellIndex');

    if(options[cellIndex] != "" || !running){
        return;
    };

    updateCell(this, cellIndex);
    checkWinner();

    console.log('clicked');
};


function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
};


function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusCheck.textContent = `${currentPlayer}'s turn`;
};


function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winpattern.length; i++){
        let condition = winpattern[i];

        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        };

        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        };
    };

    if(roundWon){
        statusCheck.textContent = `${currentPlayer} Win's 🎉🎊`;
        running = false;
    }else if(!options.includes("")){
        statusCheck.textContent = `Draw 😁`;
        running = false;
    }else {
        changePlayer();
    };
};


function restartGame(){
    currentPlayer = "X";
    running = true;
    statusCheck.textContent = `${currentPlayer}'s turn`;
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
};