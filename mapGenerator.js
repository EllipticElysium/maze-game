function setupGame() {
    rooms = [];
    for (i = 0; i < settings.gridSize ** 2; i++) {
        rooms.push(new room(i, settings.gridSize));
    }

    for (i = 0; i < rooms.length; i++) {
        if(Math.random() <= settings.removed) {
            deleteRoom(i);
        }
    }

    currentRoom = generateRandomRoom();
    generateRandomEndRoom();

    if(mapInvalid()) {
        console.log('rebuilding map');
        setupGame();
    }
    console.log('startroom', currentRoom);
}

function deleteRoom(id) {
    let up = rooms[id].up
    if(up !== null) {
        rooms[up].down = null;
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

let randomRoomID = null;
function generateRandomRoom() {
    randomRoomID = Math.floor(Math.random() * (settings.gridSize ** 2));
    if(rooms[randomRoomID] !== null) {
        return randomRoomID;
    } else {
        return generateRandomRoom();
    }
}

function generateRandomEndRoom() {
    let id = generateRandomRoom();
    if(rooms[id].availableDirections !== 4 && id !== currentRoom) {
        rooms[id].endRoom = true;
        console.log('end room:  ', id);
    } else {
        generateRandomEndRoom();
    }
}

function getUnvisitedNeighbors(id) {
    let unvisited = []
    if(rooms[id].up !== null){
        if(rooms[rooms[id].up].visited === false) {
            unvisited.push(rooms[id].up);
        }
    }
    if(rooms[id].right !== null){
        if(rooms[rooms[id].right].visited === false) {
            unvisited.push(rooms[id].right);
        }
    }
    if(rooms[id].down !== null){
        if(rooms[rooms[id].down].visited === false) {
            unvisited.push(rooms[id].down);
        }
    }
    if(rooms[id].left !== null){
        if(rooms[rooms[id].left].visited === false) {
            unvisited.push(rooms[id].left);
        }
    }
    return unvisited;
}

function mapInvalid() {
    let activeRoom = currentRoom;
    let unvisitedNeighbors = null;
    let visitedStack = [];
    let routeFound = false;
    let invalid = true;

    while(routeFound !== true) {
        rooms[activeRoom].visited = true
        if(rooms[activeRoom].endRoom === true) {
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
    for (i = 0; i < rooms.length; i++) {
        if(rooms[i] && rooms[i].visited === false) {
            rooms[i] = null;
        }
      } 
    return invalid;
}