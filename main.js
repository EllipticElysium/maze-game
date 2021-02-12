import Background from './Background';
import Foreground from './Foreground';
import Player from './CanvasElements/Player';




let settings = {};

const configURL = './configuration.txt'


global.background = new Background();
global.player = new Player();
global.foreground = new Foreground();




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
        console.log('here');
        setupGame();
        global.background.draw();
        global.foreground.update();
    } else {
        console.log('invalid configuration')
    }
}

fetch(configURL)
   .then( r => r.text() )
   .then( text => playGame(text));

