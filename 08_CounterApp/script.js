let increment = 0;
let counterReference = document.getElementById('counter-text');

document.getElementById('increment').addEventListener('click', () => {
    increment += 1;

    counterReference.innerHTML = increment;
});

document.getElementById('decrement').addEventListener('click', () => {
    increment--;

    counterReference.innerHTML = increment;
});

document.getElementById('reset').addEventListener('click', () => {
    increment = 0;

    counterReference.innerHTML = increment;
});