const boxes = document.querySelectorAll('.box')
const turnDisplay = document.getElementById('turn')
const container = document.getElementById('container')
const btn = document.getElementById('resetBtn')
const line = document.getElementById('line')
let turn = 'x';
let isGameWon = false;

// Function to change turn {X, 0}
const changeTurn = (state) => {
    return state === 'x' ? '0' : 'x';
}

// Function to check wins
const checkWin = () => {
    const boxText = document.querySelectorAll('.boxtext')
    const wins = [
        [0, 1, 2, 0, 2, 4],
        [3, 4, 5, 0, 1.7, 12],
        [6, 7, 8, 0, 2, 20],
        [0, 3, 6, 90, -6, 12],
        [1, 4, 7, 90, 2, 12],
        [2, 5, 8, 90, 10, 12],
        [0, 4, 8, 45, 2, 11.9],
        [6, 4, 2, 315, 2, 12],
    ];
    wins.forEach(e => {
        console.log(e);
        if (
            (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
            (boxText[e[1]].innerText === boxText[e[2]].innerText) &&
            (boxText[e[2]].innerText === boxText[e[0]].innerText) &&
            boxText[e[0]].innerText !== '') {
            turnDisplay.innerText = `❌Game over⭕`
            line.style.display = 'block'
            container.style.pointerEvents = 'none'
            line.style.transform = `rotate(${e[3]}deg)`
            line.style.translate = `${e[4]}vw ${e[5]}vw`
            isGameWon = true
        }
    })
}

// Main game logic
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxText.innerText == "") {
            if (turn == '0') boxText.innerText = '⭕'
            else if (turn == 'x') boxText.innerText = '❌'

            turn = changeTurn(turn)
            checkWin()
            if (!isGameWon) turnDisplay.innerText = `Turn for ${turn}`
        }
    })
})
// Reset logic
btn.onclick = () => {
    console.log("Btn clicked")
    let boxText = document.querySelectorAll('.boxtext')
    boxText.forEach(e => {
        e.innerText = ''
        container.style.pointerEvents = 'all'
        turnDisplay.innerText = `Turn for ${turn}`
        line.style.display = 'none'
        isGameWon = false
    })
}