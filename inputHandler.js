function keyDown(e) {
    if(
        e.key === 'ArrowUp' || e.key === 'Up' ||
        e.key === 'w' || e.key === 'W'
        ) {
        player.dy = - player.speed;
    } else if(
        e.key === 'ArrowRight' || e.key === 'Right' ||
        e.key === 'd' || e.key === 'D'
        ) {
        player.dx = player.speed;
    } else if(
        e.key === 'ArrowDown' || e.key === 'Down' ||
        e.key === 's' || e.key === 'S'
        ) {
        player.dy = player.speed;
    } else if(
        e.key === 'ArrowLeft' || e.key === 'Left' ||
        e.key === 'a' || e.key === 'A'
        ) {
        player.dx = -player.speed;
    } else if(e.key === " ") {
        Room.rooms[player.room].addMarker();
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
        player.dx = 0;
        player.dy = 0;
    }
}

function click(e) {
    if(e.button === 0) {
        if(
            e.clientY >= background.canvasRect.top &&
            e.clientY <= background.canvasRect.bottom &&
            e.clientX >= background.canvasRect.left &&
            e.clientX <= background.canvasRect.right
        ) {
            let x = e.clientX - background.canvasRect.x;
            let y = e.clientY - background.canvasRect.y;
            player.fireProjectile(x, y);
        }
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', click);

window.onresize = function() {
    background = new Background();
    background.draw();
    foreground = new Foreground();
    foreground.update();
    player.resetPosition();
};