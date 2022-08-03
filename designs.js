'use strict';

function clear(canvas) {
    while (canvas.rows.length != 0) {
        canvas.deleteRow(0);
    }
}

function makeGrid() {
    const canvas = document.getElementById('pixelCanvas');
    clear(canvas);

    const gridWidth = document.getElementById('inputWidth').value;
    const gridHeight = document.getElementById('inputHeight').value;

    for (let i=0; i<gridHeight; i++) {
        let row = canvas.insertRow(i);
        for (let j=0; j<gridWidth; j++) {
            let newCell = row.insertCell(j);
            paintable(newCell);
        }
    }
}

function paintable(cell) {
    let colorChoice = document.getElementById('colorPicker').value;
    cell.addEventListener('click', e => {
        e.target.style.backgroundColor = colorChoice;
    });
}

document.getElementById('sizePicker').addEventListener('submit', e => {
    e.preventDefault();
    makeGrid();
});