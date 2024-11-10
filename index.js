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

//