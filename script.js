const gridContainer = document.getElementById('gridContainer');
const clearBtn = document.getElementById('clearBtn');

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement('div');
      gridContainer.appendChild(cell).className = 'grid-item';
    };

    gridContainer.addEventListener('mouseover', changeColor);

    clearBtn.addEventListener('click', clearCanvas);
  };

function clearCanvas(gridSquare) {
  alert('button press test');
  
}

function changeColor(e) {
  e.target.style.backgroundColor = '#000000';
}

makeRows(16, 16);