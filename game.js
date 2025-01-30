const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 4;
let grid = [];
let score = 0;

// 初始化遊戲
function initGame() {
    grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
    addRandomTile();
    addRandomTile();
    drawGame();
}

// 隨機新增數字 2 或 4
function addRandomTile() {
    let emptyCells = [];
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            if (grid[r][c] === 0) emptyCells.push({ r, c });
        }
    }
    if (emptyCells.length > 0) {
        let { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[r][c] = Math.random() > 0.1 ? 2 : 4;
    }
}

// 繪製遊戲畫面
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            let value = grid[r][c];
            ctx.fillStyle = value ? `rgb(${255 - value}, ${255 - value}, 0)` : "#ccc";
            ctx.fillRect(c * 100, r * 100, 100, 100);
            ctx.fillStyle = "black";
            ctx.fillText(value || "", c * 100 + 50, r * 100 + 50);
        }
    }
}

// 重新開始遊戲
function restartGame() {
    score = 0;
    initGame();
}

// 初始化
initGame();
