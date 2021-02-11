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

function playGame() {
    setupGame();
    drawBackground();
    updateItems();
    updatePlayer();
}


playGame();




