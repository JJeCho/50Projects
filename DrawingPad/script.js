const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const sizeSpan = document.getElementById("size");
const clearButton = document.querySelector("#clear");
const downloadButton = document.querySelector("#download");
const colorInput = document.querySelector("#color");
const eraserButton = document.querySelector("#eraser");
const brushButton = document.querySelector("#brush");
const emojiButton = document.querySelector("#emoji");
const undoButton = document.querySelector("#undo");

let size = 10;
let isPressed = false;
let color = "black";
let mode = "brush";
let emoji = "😊";
let x = undefined;
let y = undefined;
let drawingHistory = [];

function saveDrawingState() {
  drawingHistory.push(canvas.toDataURL()); // Save the current state of the canvas as a data URL
}

function undo() {
  if (drawingHistory.length > 0) {
    drawingHistory.pop(); // Remove the last saved state
    if (drawingHistory.length > 0) {
      const img = new Image();
      img.src = drawingHistory[drawingHistory.length - 1];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.drawImage(img, 0, 0); // Redraw the previous state
      };
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas when there's no previous state
    }
  }
}

emojiButton.addEventListener("click", () => {
  emoji = prompt("Enter an emoji");
  mode = "emoji";
});

undoButton.addEventListener('click', undo);

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;

  if(mode=="emoji"){
    drawEmoji(x,y,emoji);
  }
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  saveDrawingState();
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    if(mode == "brush" | mode == "eraser"){
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
    } else if (mode == "emoji") {
      drawEmoji(x2, y2, emoji);
    }

    x = x2;
    y = y2;
  }
});

clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

decreaseButton.addEventListener("click", () => {
  size -= 1; // Decrease the size by a certain amount
  sizeSpan.textContent = size; // Update the display of the size
});

increaseButton.addEventListener("click", () => {
  size += 1; // Increase the size by a certain amount
  sizeSpan.textContent = size; // Update the display of the size
});

colorInput.addEventListener("input", (e) => {
  color = e.target.value;
  
  ctx.globalCompositeOperation = 'source-over'; // Set the composite operation back to default
  mode = "brush";
})

brushButton.addEventListener('click', () => {
  ctx.globalCompositeOperation = 'source-over'; // Set the composite operation back to default
  mode = "brush";
});

eraserButton.addEventListener('click', () => {
    ctx.globalCompositeOperation = 'destination-out'; // Set the composite operation to erase
    mode = "eraser";
  });

downloadButton.addEventListener("click", () => {
  console.log("clicked");
  const link = document.createElement("a");
  link.download = "canvas.png";
  link.href = canvas.toDataURL();
  link.click();
  link.remove();
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function drawEmoji(x, y, emoji) {
  ctx.font = size + "px Arial"; // Set the font size for the emoji
  ctx.fillText(emoji, x, y); // Draw the emoji at the specified position
}