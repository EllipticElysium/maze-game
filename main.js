const settings = {
    gridSize: 30,
    removed: 0.5,
    minimumNodes: 100
};

function keyDown(e) {
    if(e.key === 'ArrowUp' || e.key === 'Up') {
        player.dy = - player.speed;
    } else if(e.key === 'ArrowRight' || e.key === 'Right') {
        player.dx = player.speed;
    } else if(e.key === 'ArrowDown' || e.key === 'Down') {
        player.dy = player.speed;
    } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        player.dx = -player.speed;
    }
}

function keyUp(e) {
    if(
        e.key === 'ArrowUp' || e.key === 'UP' ||
        e.key === 'ArrowRight' || e.key === 'Right' ||
        e.key === 'ArrowDown' || e.key === 'Down' ||
        e.key === 'ArrowLeft' || e.key === 'Left'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

function click(e) {
    if(e.button === 0) {
        if(
            e.clientY >= canvasRect.top &&
            e.clientY <= canvasRect.bottom &&
            e.clientX >= canvasRect.left &&
            e.clientX <= canvasRect.right
        ) {
            let x = e.clientX - canvasRect.x;
            let y = e.clientY - canvasRect.y;
            player.fireProjectile(x, y);
        }
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', click);

let gameFinished = false;

let player = new Player();
let background = new background();

function changeRoom(id, direction) {
    let newRoom = Room.rooms[id].changeRoom(direction);
    player.currentRoom = newRoom;
}

function playGame() {
    setupGame();
    drawBackground();
    updateItems();
    updatePlayer();
}


playGame();




