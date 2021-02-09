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

let x = 5;
let y = 5;

function drawBackground(id) {
    console.log('draw background:  ', rooms[id]);

    ctxBackground.beginPath();
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

function clearPlayer() {
    ctxPlayer.clearRect(0,0, canvasPlayer.width, canvasPlayer.height);
}

function drawPlayer() {
    ctxPlayer.beginPath();
    ctxPlayer.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctxPlayer.fill();
}

function test() {
    player.x += player.dx;
    player.y += player.dy;
}

function updatePlayer() {
    clearPlayer();
    test();
    drawPlayer();

    requestAnimationFrame(updatePlayer)
}

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        player.dx = player.speed;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUP);



// ctxItems.fillStyle = 'green';
// ctxItems.fillRect(50, 50, 100, 100);

// ctxPlayer.fillStyle = 'red';
// ctxPlayer.fillRect(75, 75, 50, 50)