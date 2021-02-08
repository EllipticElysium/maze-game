const settings = {
    gridSize: 10
};

let gameFinished = false;

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

function nextTurn(action) {
    if(action.type === 'changeroom') {
        changeRoom(currentRoom, action.direction);
    }
    displayRoom(currentRoom);
}

function playGame() {
    setupGame();
    displayRoom(currentRoom);
}

$( "#up" ).click(function() {
    nextTurn({
        type: 'changeroom',
        direction: 'up'
    });
});
$( "#right" ).click(function() {
    nextTurn({
        type: 'changeroom',
        direction: 'right'
    });
});
$( "#down" ).click(function() {
    nextTurn({
        type: 'changeroom',
        direction: 'down'
    });
});
$( "#left" ).click(function() {
    nextTurn({
        type: 'changeroom',
        direction: 'left'
    });
});

playGame();




