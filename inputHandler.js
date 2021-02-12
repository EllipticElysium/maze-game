function keyDown(e) {
    if(
        e.key === 'ArrowUp' || e.key === 'Up' ||
        e.key === 'w' || e.key === 'W'
        ) {
        global.player.dy = - global.player.speed;
    } else if(
        e.key === 'ArrowRight' || e.key === 'Right' ||
        e.key === 'd' || e.key === 'D'
        ) {
        global.player.dx = global.player.speed;
    } else if(
        e.key === 'ArrowDown' || e.key === 'Down' ||
        e.key === 's' || e.key === 'S'
        ) {
        global.player.dy = global.player.speed;
    } else if(
        e.key === 'ArrowLeft' || e.key === 'Left' ||
        e.key === 'a' || e.key === 'A'
        ) {
        global.player.dx = -global.player.speed;
    } else if(e.key === " ") {
        Room.rooms[global.player.room].addMarker();
    }
}

function keyUp(e) {
    if(
        e.key === 'ArrowUp' || e.key === 'UP'||
        e.key === 'w' || e.key === 'W' ||
        e.key === 'ArrowRight' || e.key === 'Right' ||
        e.key === 'd' || e.key === 'D' ||
        e.key === 'ArrowDown' || e.key === 'Down' ||
        e.key === 's' || e.key === 'S' ||
        e.key === 'ArrowLeft' || e.key === 'Left' ||
        e.key === 'a' || e.key === 'A'
    ) {
        global.player.dx = 0;
        global.player.dy = 0;
    }
}

function click(e) {
    if(e.button === 0) {
        if(
            e.clientY >= global.background.canvasRect.top &&
            e.clientY <= global.background.canvasRect.bottom &&
            e.clientX >= global.background.canvasRect.left &&
            e.clientX <= global.background.canvasRect.right
        ) {
            let x = e.clientX - global.background.canvasRect.x;
            let y = e.clientY - global.background.canvasRect.y;
            global.player.fireProjectile(x, y);
        }
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', click);

window.onresize = function() {
    background = new Background();
    global.background.draw();
    global.foreground = new Foreground();
    global.foreground.update();
    global.player.resetPosition();
};

if (typeof module !== 'undefined') {
    module.exports = {keyDown, keyUp, click};
}