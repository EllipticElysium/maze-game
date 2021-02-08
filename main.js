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

    currentRoom = generateRandomRoom();
    generateRandomEndRoom();

    if(mapInvalid()) {
        console.log('rebuilding map');
        setupGame();
    }
}

function deleteRoom(id) {
    let up = rooms[id].up
    if(up !== null) {
        rooms[up].bottom = null;
        rooms[up].availableDirections --;
    }    
    let right = rooms[id].right
    if(right !== null) {
        rooms[right].left = null;
        rooms[right].availableDirections --;
    }    
    let down = rooms[id].down
    if(down !== null) {
        rooms[down].up = null;
        rooms[down].availableDirections --;
    }    
    let left = rooms[id].left
    if(left !== null) {
        rooms[left].right = null;
        rooms[left].availableDirections --;
    }
    rooms[id] = null;
}

function generateRandomRoom() {
    let id = Math.floor(Math.random() * (settings.gridSize ** 2));
    if(rooms[id] !== null) {
        return id;
    } else {
        generateRandomRoom();
    }
}

function generateRandomEndRoom() {
    let id = generateRandomRoom();
    if(rooms[id].availableDirections !== 4) {
        rooms[id].endRoom = true;
    } else {
        generateRandomEndRoom();
    }
}

function getUnvisitedNeighbors(id) {
    let unvisited = []
    if(rooms[rooms[id].up].visited === false) {
        unvisited.push(rooms[id].up);
    }
    if(rooms[rooms[id].right].visited === false) {
        unvisited.push(rooms[id].right);
    }
    if(rooms[rooms[id].down].visited === false) {
        unvisited.push(rooms[id].down);
    }
    if(rooms[rooms[id].left].visited === false) {
        unvisited.push(rooms[id].left);
    }
    return unvisited;
}

function mapInvalid() {
    let activeRoom = currentRoom;
    let unvisitedNeighbors = null;
    let visitedStack = [];
    let routeFound = true;

    while(routeFound !== true) {
        rooms[activeRoom].visited = true
        if(rooms[activeRoom].endRoom === true) {
            //end search
        }
        unvisitedNeighbors = getUnvisitedNeighbors(activeRoom);
    }

    return false;
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




