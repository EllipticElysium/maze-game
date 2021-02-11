const settings = {
    gridSize: 30,
    removed: 0.5,
    minimumNodes: 100
};

let gameFinished = false;

let player = new Player();

function changeRoom(id, direction) {
    let newRoom = Room.rooms[id].changeRoom(direction);
    player.currentRoom = newRoom;
}

function nextTurn(action) {
    if(action.type === 'changeroom') {
        changeRoom(player.currentRoom, action.direction);
    }
    displayRoom(player.currentRoom);
}

function startTimer() {
    let start = Date.now();
    setInterval(function() {
        if(player.finished !== true) {
            let time = Date.now() - start;
            player.time = Math.floor(time / 1000)
    
            $('#time').text("Time:  " + player.time);
        }
    }, 100);

}

function playGame() {
    setupGame();
    drawBackground();
    updateItems();
    updatePlayer();
    startTimer();
}


playGame();




