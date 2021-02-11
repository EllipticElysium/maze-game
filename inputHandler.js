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