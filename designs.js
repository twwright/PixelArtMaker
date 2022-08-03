'use strict';

function clear(canvas) {
    while (canvas.rows.length != 0) {
        canvas.deleteRow(0);
    }
}

function makeGrid() {
    const canvas = document.getElementById('pixelCanvas');
    clear(canvas);

    const inputWidth = document.getElementById('inputWidth').value;
    const inputHeight = document.getElementById('inputHeight').value;

    const gridWidth = new Array(inputWidth).fill().map((_, idx) => idx);
    const gridHeight = new Array(inputHeight).fill().map((_, idx) => idx);

    for (row of gridHeight) {
        let row = canvas.insertRow(row);
        for (col of gridWidth) {
            let newCell = row.insertCell(col);
    }
}

