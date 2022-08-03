'use strict';

// Declares and defines a globally scoped variable for the canvas
const canvas = document.getElementById('pixelCanvas');

// Deletes any current grid drawings
function clearCanvas() {
    while (canvas.rows.length != 0) {
        canvas.deleteRow(0);
    }
}

// Makes a new grid
function makeGrid() {
    // Ensures previous drawing is cleared
    clearCanvas();

    // Add a table with user inputs from the form element
    const gridWidth = document.getElementById('inputWidth').value;
    const gridHeight = document.getElementById('inputHeight').value;

    for (let i=0; i<gridHeight; i++) {
        let row = canvas.insertRow(i);
        for (let j=0; j<gridWidth; j++) {
            let newCell = row.insertCell(j);
            // Adds an event listener on the table's cells to be "paintable"
            paintable(newCell);
        }
    }
}

// Creates an click event listener to paint the cells the user's choice
function paintable(cell) {
    let colorChoice;
    cell.addEventListener('click', e => {
        colorChoice = document.getElementById('colorPicker').value;
        e.target.style.backgroundColor = colorChoice;
    });
}

// Initiates the makeGrid() function on user submit
document.getElementById('sizePicker').addEventListener('submit', e => {
    e.preventDefault();
    makeGrid();
});

// Erases any current drawing on the current grid
document.getElementById('sizePicker').addEventListener('reset', e => {
    e.preventDefault();
    const cells = document.querySelectorAll('td');
    for (let cell of cells) {
        cell.removeAttribute('style');
    }
})

// Creates a new default-sized grid after the DOM is loaded
document.addEventListener('DOMContentLoaded', makeGrid());