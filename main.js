const settings = {
    gridSize: 30,
    removed: 0.5,
    minimumNodes: 100
};

let gameFinished = false;

let rooms = [];
let currentRoom = null;
let player = new Player();

function changeRoom(id, direction) {
    let newRoom = rooms[id].changeRoom(direction);
    currentRoom = newRoom;
}

function nextTurn(action) {
    if(action.type === 'changeroom') {
        changeRoom(currentRoom, action.direction);
    }
    displayRoom(currentRoom);
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




