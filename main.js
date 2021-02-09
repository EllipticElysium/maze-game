const settings = {
    gridSize: 30,
    removed: 0.5,
    minimumNodes: 100
};

let gameFinished = false;

let rooms = [];
let currentRoom = null;
let player = new Player();

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
    }
}

function displayRoom(id) {
    console.log(rooms[id]);
    drawBackground(id);
}

function changeRoom(id, direction) {
    let newRoom = rooms[id].changeRoom(direction);
    if(newRoom !== null) {
        currentRoom = newRoom;
        if(rooms[currentRoom].endRoom === true) {
            $('#info #general').text("Winner!!!!");
        } else {
            $('#info #general').text("");
        }
    } else {
        $('#info #general').text("you can't go that way");
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
    updatePlayer();
}


playGame();




