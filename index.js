// Get DOM elements
const grid = document.querySelector(".canvas-area");
const userValue = document.querySelector("#grid-size");
const userSubmit = document.querySelector("#sub");
const promptText = document.querySelector("#prompt");
const copyInput = document.querySelector("#copy-input");
const clearBtn = document.querySelector("#clear-btn");

//Event Listeners
userValue.addEventListener("focus", enterHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", createGrid);
clearBtn.addEventListener("click", clearGrid);

//Functions on page load
createGrid();
draw();

// Functions of the Canvas-area
function duplicateGrid() {
    let grid = userValue.value;
    copyInput.textContent = "x " + grid;
}

function enterHint() {
    promptText.textContent = "Enter a number between 2 and 99.";
}

function createGrid() {
    let gridSize = userValue.value;
    if (gridSize < 0 || gridSize > 99 || isNaN(gridSize)) {
        promptText.textContent = "Make sure it's a number between 2 and 99!"
    } else {
        userValue.value = "";
        grid.innerHTML = "";
        promptText.textContent = "";
        copyInput.textContent = "";

        if (gridSize == 0 || gridSize > 99 || gridSize == "") {
            gridSize = 16;
        }

        for (let i = 0; i < gridSize; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild("row");
            
            for (let j = 0; j < gridSize; j++) {
                let column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
    }
    // Drawing of the Grid
    draw();
}

function draw() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }
}

function changeColor() {
    const redRad = document.getElementById("red-clr");
    const greenRad = document.getElementById("green-clr");
    const blueRad = document.getElementById("blue-clr");
    const randomRad = document.getElementById("random");
    const eraserRad = document.getElementById("eraser");

    if (redRad.checked) {
        this.backgroundColor = rgb(218, 45, 45);
    } else if (greenRad.checked) {
        this.backgroundColor = rgb(0, 128, 0);
    } else if (blueRad.checked) {
        this.backgroundColor = rgb(0, 0, 255);
    } else if (randomRad.checked) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    } else if (eraserRad.checked) {
        this.style.backgroundColor = "";
    }
}

function clearGrid() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = "";
    }
}
