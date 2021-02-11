let settings = {};

const configURL = './configuration.txt'


let background = new Background();
let player = new Player();
let foreground = new Foreground();


function changeRoom(id, direction) {
    let newRoom = Room.rooms[id].changeRoom(direction);
    player.room = newRoom;
}

function configIsValid(config) {
    let inputsettings = JSON.parse(config);
    if(
        inputsettings.minimumNodes < 
        (inputsettings.gridSize ** 2 * inputsettings.removed)
    ) {
        settings = inputsettings;
        return true;
    } else {
        return false;
    }
}

function playGame(config) {
    if(configIsValid(config)) {
        setupGame();
        background.draw();
        foreground.update();
    } else {
        console.log('invalid configuration')
    }
}

fetch(configURL)
   .then( r => r.text() )
   .then( text => playGame(text));
