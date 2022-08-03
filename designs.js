'use strict';

function clearCanvas() {
    const canvas = document.getElementById('pixelCanvas');
    while (canvas.rows.length != 0) {
        canvas.deleteRow(0);
    }
}

function makeGrid() {
    clearCanvas();

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
    let colorChoice;
    cell.addEventListener('click', e => {
        colorChoice = document.getElementById('colorPicker').value;
        e.target.style.backgroundColor = colorChoice;
    });
}

document.getElementById('sizePicker').addEventListener('submit', e => {
    e.preventDefault();
    makeGrid();
});

document.getElementById('clearCanvas').addEventListener('reset', e => {
    e.preventDefault();
    clearCanvas();
})