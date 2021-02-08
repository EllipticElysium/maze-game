const settings = {
    gridSize: 10
};

let rooms = [];
let currentRoom = Math.floor(Math.random() * (settings.gridSize ** 2));

function setupGame() {
    for (i = 0; i < settings.gridSize ** 2; i++) {
        rooms.push(new room(i, settings.gridSize));
    }
}

function displayRoom(id) {
    console.log(rooms[id]);
}

function changeRoom(id, direction) {
    let newRoom = rooms[id].changeRoom(direction);
    if(newRoom !== null) {
        currentRoom = newRoom;
    } else {
        console.log("you can't go that way")
    }
}

function playGame() {
    setupGame();

    displayRoom(currentRoom);
    changeRoom(currentRoom, 'down');
    displayRoom(currentRoom);
}


playGame();




