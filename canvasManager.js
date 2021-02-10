const canvasBackground = document.getElementById('canvas-background');
const canvasItems = document.getElementById('canvas-items');
const canvasPlayer = document.getElementById('canvas-player');

canvasBackground.width = window.innerHeight * 0.75;
canvasBackground.height = window.innerHeight * 0.75;
canvasItems.width = window.innerHeight * 0.75;
canvasItems.height = window.innerHeight * 0.75;
canvasPlayer.width = window.innerHeight * 0.75;
canvasPlayer.height = window.innerHeight * 0.75;

const ctxItems = canvasItems.getContext('2d');
const ctxBackground = canvasBackground.getContext('2d');
const ctxPlayer = canvasPlayer.getContext('2d');

function drawBackground() {
    ctxBackground.clearRect(0,0, canvasBackground.width, canvasBackground.height);
    let id = currentRoom;

    ctxBackground.beginPath();
    ctxBackground.lineWidth = 10;
    ctxBackground.moveTo(0, 0);
    ctxBackground.lineTo(canvasBackground.width*(5/12), 0);
    if(rooms[id].up) {
        ctxBackground.moveTo(canvasBackground.width*(7/12), 0);
    } else {
        ctxBackground.lineTo(canvasBackground.width*(7/12), 0);
    }
    ctxBackground.lineTo(canvasBackground.width, 0);

    ctxBackground.lineTo(canvasBackground.width, canvasBackground.height*(5/12));
    if(rooms[id].right) {
        ctxBackground.moveTo(canvasBackground.width, canvasBackground.height*(7/12));
    } else {
        ctxBackground.lineTo(canvasBackground.width, canvasBackground.height*(7/12));
    }
    ctxBackground.lineTo(canvasBackground.width, canvasBackground.height);

    ctxBackground.lineTo(canvasBackground.width*(7/12), canvasBackground.height);
    if(rooms[id].down) {
        ctxBackground.moveTo(canvasBackground.width*(5/12), canvasBackground.height);
    } else {
        ctxBackground.lineTo(canvasBackground.width*(5/12), canvasBackground.height);
    }
    ctxBackground.lineTo(0, canvasBackground.height);

    ctxBackground.lineTo(0, canvasBackground.height*(7/12));
    if(rooms[id].left) {
        ctxBackground.moveTo(0, canvasBackground.height*(5/12));
    } else {
        ctxBackground.lineTo(0, canvasBackground.height*(5/12));
    }
    ctxBackground.lineTo(0, 0);

    ctxBackground.stroke();
}

function drawItems() {
    ctxItems.clearRect(0, 0, canvasItems.width, canvasItems.height);

    rooms[currentRoom].contents.treasure.forEach(function(treasure) {
        treasure.update();
        ctxItems.beginPath();
        ctxItems.arc(treasure.x, treasure.y, treasure.radius, 0, Math.PI * 2);
        ctxItems.fillStyle = 'gold';
        ctxItems.fill();
    })

    rooms[currentRoom].contents.enemies.forEach(function(enemy) {
        enemy.update();
        ctxItems.beginPath();
        ctxItems.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctxItems.fillStyle = 'red';
        ctxItems.fill();
    })
}

function clearPlayer() {
    ctxPlayer.clearRect(0,0, canvasPlayer.width, canvasPlayer.height);
}

function drawPlayer() {
    ctxPlayer.beginPath();
    ctxPlayer.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctxPlayer.fillStyle = 'purple';
    ctxPlayer.fill();
}

function updatePlayer() {
    clearPlayer();
    player.move();
    drawPlayer();

    requestAnimationFrame(updatePlayer);
}

function updateItems() {
    drawItems();

    requestAnimationFrame(updateItems);
}

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

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);



// ctxItems.fillStyle = 'green';
// ctxItems.fillRect(50, 50, 100, 100);

// ctxPlayer.fillStyle = 'red';
// ctxPlayer.fillRect(75, 75, 50, 50)