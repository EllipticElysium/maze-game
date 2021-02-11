const settings = {
    gridSize: 30,
    removed: 0.5,
    minimumNodes: 100
};

let background = new Background();
let player = new Player();
let foreground = new Foreground();


function changeRoom(id, direction) {
    let newRoom = Room.rooms[id].changeRoom(direction);
    player.room = newRoom;
}

function playGame() {
    setupGame();
    background.draw();
    foreground.update();
}


playGame();




