function clear(canvas) {
    while (canvas.rows.length !+ 0) {
        canvas.deleteRow(0);
    }
}

function makeGrid() {
    const gridWidth = document.getElementById('inputWidth').value;
    const gridHeight = document.getElementById('inputHeight').value;
    const canvas = document.getElementById('pixelCanvas');
    clear(canvas);
    