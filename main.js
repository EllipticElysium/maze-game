const settings = {
    gridSize: 4
};

let gameFinished = false;

let rooms = [];
let currentRoom = null;

function setupGame() {
    rooms = [];
    for (i = 0; i < settings.gridSize ** 2; i++) {
        rooms.push(new room(i, settings.gridSize));
    }

    for (i = 0; i < rooms.length; i++) {
        if(Math.random() <= 0.2) {
            deleteRoom(i);
        }
    }

    currentRoom = Math.floor(Math.random() * (settings.gridSize ** 2));
}

function deleteRoom(id) {
    let up = rooms[id].up
    if(up !== null) {
        rooms[up].bottom = null
    }    
    let right = rooms[id].right
    if(right !== null) {
        rooms[right].left = null
    }    
    let down = rooms[id].down
    if(down !== null) {down
        rooms[down].up = null
    }    
    let left = rooms[id].left
    if(left !== null) {
        rooms[left].right = null
    }
    rooms[id] = null;
}


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




