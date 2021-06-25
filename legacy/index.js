let button = document.getElementById("button");
let resetButton = document.getElementById("reset-button");
let counter = document.getElementById("counter-val");
let currCounterVal = 0;

button.onclick = () => {
    counter.innerText = ++currCounterVal;
}

resetButton.onclick = function() {
    currCounterVal = 0;
    counter.innerText = currCounterVal;
}