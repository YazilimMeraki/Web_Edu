const board_el = document.querySelector('#board');
const cell_els = document.querySelectorAll('#board .cell');
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let current_turn;

setup();

function setup() {
    board_el.classList.remove('turn-x', 'turn-o');

    for (let cell of cell_els) {
        cell.classList.remove('x', 'o');
        cell.addEventListener('click', fillCell, { once: true })
    }

    current_turn = Math.round(Math.random(0, 1)) == 1 ? 'x' : 'o';
    board_el.classList.add('turn-' + current_turn);
}

function fillCell() {
    this.classList.add(current_turn);

    if (checkForWin()) {
        const restart = confirm(current_turn.toUpperCase() + " is the winner! Restart?");

        if (restart) setup();
    } else if (checkForDraw()) {
        const restart = confirm("I's a draw! Restart?");

        if (restart) setup();
    } else {
        current_turn = current_turn == 'x' ? 'o' : 'x';
        board_el.classList.remove('turn-o', 'turn-x');
        board_el.classList.add('turn-' + current_turn);

    }

}

function checkForWin() {
    return combinations.some(combinations => {
        return combinations.every(c => {
            if (cell_els[c].classList.contains(current_turn)) {
                return true
            } else {
                return false
            }
        })
    })
}

function checkForDraw() {
    return [...cell_els].every(c => {
        if (
            c.classList.contains('x') ||
            c.classList.contains('o')
        ) {
            return true
        }
        return false
    })
}