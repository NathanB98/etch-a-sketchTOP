createGrid();

function createGrid() {
    for(let i = 0; i < 16; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('squareDiv');
        document.getElementById('gridContainer').appendChild(gridSquare);
    }
}