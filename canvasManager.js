const canvasBackground = document.getElementById('canvas-background');
const canvasItems = document.getElementById('canvas-items');
const canvasPlayer = document.getElementById('canvas-player');

const ctxItems = canvasItems.getContext('2d');
const ctxBackground = canvasBackground.getContext('2d');
const ctxPlayer = canvasPlayer.getContext('2d');

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





// ctxItems.fillStyle = 'green';
// ctxItems.fillRect(50, 50, 100, 100);

// ctxPlayer.fillStyle = 'red';
// ctxPlayer.fillRect(75, 75, 50, 50)