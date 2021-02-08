const settings = {
    gridSize: 10
};

let gameFinished = false;

let rooms = [];
let currentRoom = null;

function displayMap() {
    let map = [];
    for (i = 0; i < settings.gridSize; i++) {
        map.push([]);
        for (j = 0; j < settings.gridSize; j++) {
            if(rooms[settings.gridSize * i + j] !== null) {
                map[i].push(1);
            } else {
                map[i].push(0);
            }
        }
        console.log(map[i]);
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

function nextTurn(action) {
    if(action.type === 'changeroom') {
        changeRoom(currentRoom, action.direction);
    }
    displayRoom(currentRoom);
}

function playGame() {
    setupGame();
    displayMap();
    displayRoom(currentRoom);
}


playGame();




