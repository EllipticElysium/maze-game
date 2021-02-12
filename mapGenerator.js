function setupGame() {
    Room.rooms = [];

    for (i = 0; i < settings.gridSize ** 2; i++) {
        Room.rooms.push(new Room(i, settings.gridSize));
    }
    
    for (i = 0; i < Room.rooms.length; i++) {
        if(Math.random() <= settings.removed) {
            deleteRoom(i);
        }
    }

    global.player.room = generateRandomRoom();
    generateRandomEndRoom();


    if(mapInvalid()) {
        console.log('rebuilding map');
        setupGame();
    }
    
    Room.rooms[global.player.room].treasure = {};
    Room.rooms[global.player.room].markers = {};
    Room.rooms[global.player.room].enemies = {};

    console.log('startroom', global.player.room);
    }

function deleteRoom(id) {
    let up = Room.rooms[id].up
    if(up !== null) {
        Room.rooms[up].down = null;
        Room.rooms[up].availableDirections --;
    }    
    let right = Room.rooms[id].right
    if(right !== null) {
        Room.rooms[right].left = null;
        Room.rooms[right].availableDirections --;
    }    
    let down = Room.rooms[id].down
    if(down !== null) {
        Room.rooms[down].up = null;
        Room.rooms[down].availableDirections --;
    }    
    let left = Room.rooms[id].left
    if(left !== null) {
        Room.rooms[left].right = null;
        Room.rooms[left].availableDirections --;
    }
    Room.rooms[id] = null;
}

let randomRoomID = null;
function generateRandomRoom() {
    randomRoomID = Math.floor(Math.random() * (settings.gridSize ** 2));
    if(Room.rooms[randomRoomID] !== null) {
        return randomRoomID;
    } else {
        return generateRandomRoom();
    }
}

function generateRandomEndRoom() {
    let id = generateRandomRoom();
    if(Room.rooms[id].availableDirections !== 4 && id !== global.player.room) {
        let endDoor = false;
        let directions = ['up', 'right', 'down', 'left'];
        let direction = null;
        let index = null;
        while(endDoor === false) {
            index = Math.floor(Math.random() * (directions.length));
            direction = directions[index];
            if(Room.rooms[id][direction] === null) {
                endDoor = true;
                Room.rooms[id][direction] = 'end';
            } else {
                directions.splice(index, 1);
            }
            
        }
        Room.rooms[id].endRoom = true;
        console.log('end room:  ', id);
    } else {
        generateRandomEndRoom();
    }
}

function getUnvisitedNeighbors(id) {
    let unvisited = []
    if(Room.rooms[id].up !== null && Room.rooms[id].up !== 'end'){
        if(Room.rooms[Room.rooms[id].up].visited === false) {
            unvisited.push(Room.rooms[id].up);
        }
    }
    if(Room.rooms[id].right !== null && Room.rooms[id].right !== 'end'){
        if(Room.rooms[Room.rooms[id].right].visited === false) {
            unvisited.push(Room.rooms[id].right);
        }
    }
    if(Room.rooms[id].down !== null && Room.rooms[id].down !== 'end'){
        if(Room.rooms[Room.rooms[id].down].visited === false) {
            unvisited.push(Room.rooms[id].down);
        }
    }
    if(Room.rooms[id].left !== null && Room.rooms[id].left !== 'end'){
        if(Room.rooms[Room.rooms[id].left].visited === false) {
            unvisited.push(Room.rooms[id].left);
        }
    }
    return unvisited;
}

function mapInvalid() {
    let activeRoom = global.player.room;
    let unvisitedNeighbors = null;
    let visitedStack = [];
    let routeFound = false;
    let invalid = true;
    let availableNodes = settings.gridSize ** 2;

    while(routeFound !== true) {
        Room.rooms[activeRoom].visited = true
        if(Room.rooms[activeRoom].endRoom === true) {
            invalid = false;
        }
        unvisitedNeighbors = getUnvisitedNeighbors(activeRoom);
        if(unvisitedNeighbors.length > 0) {
            visitedStack.push(activeRoom)
            activeRoom = unvisitedNeighbors[0];
        } else {
            if(visitedStack.length > 0) {
                activeRoom = visitedStack.pop();
            } else {
                break
            }
        }
    }

    for (i = 0; i < Room.rooms.length; i++) {
        if(Room.rooms[i] === null) {
            availableNodes--;
        } else if(Room.rooms[i].visited === false) {
            availableNodes--;
            Room.rooms[i] = null;
        }
    }
    if(availableNodes < settings.minimumNodes) {
        invalid = true;
    }
    console.log('available nodes:   ', availableNodes);
    return invalid;
}

if (typeof module !== 'undefined') {
    module.exports = {
        setupGame,
        deleteRoom,
        generateRandomRoom,
        generateRandomEndRoom,
        getUnvisitedNeighbors,
        mapInvalid
    };
}