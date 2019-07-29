// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Variables
const submitButton = document.querySelector('input[type="submit"]');
const gridHeightInput = document.getElementById('inputHeight');
const gridWidthInput = document.getElementById('inputWidth');
const cellColorInput = document.getElementById('colorPicker');

function makeGrid() {
// Your code goes here!
// Here's where we build the grid of #rows x #columns
const gridHeight = parseInt(gridHeightInput.value);
const gridWidth = parseInt(gridWidthInput.value);
pixelCanvas.innerHTML = ''

for (var rowNumber = 1; rowNumber < gridHeight+1; rowNumber++) {
  let row = document.createElement('tr');
  row.setAttribute("id", "tr"+rowNumber);
  pixelCanvas.appendChild(row);
  for (var colNumber = 1; colNumber < gridWidth+1; colNumber++) {
    let column = document.createElement('td');
    column.setAttribute("id", "td"+colNumber);
    row.appendChild(column);
    column.addEventListener('click', cellColoring);
    }
  }
}

// Add color to those grid squares "clicked" by the user
function cellColoring(event) {
  const cellColor = cellColorInput.value;
  let cellPicker = event.target;
  cellPicker.style.backgroundColor = cellColor;
}

//If there are colored squares in the grid, clicking the "submit" button clears
//them out
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  makeGrid()
})
