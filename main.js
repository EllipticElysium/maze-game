import Background from './Background';
import Foreground from './Foreground';
import Player from './CanvasElements/Player';
import MapGenerator from './mapGenerator';

require('./inputHandler');



global.settings = {};

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
        global.settings = inputsettings;
        return true;
    } else {
        return false;
    }
}

function playGame(config) {
    if(configIsValid(config)) {
        new MapGenerator().setupGame();
        console.log('map generated');
        global.background.draw();
        console.log('background drawn');
        global.foreground.update();
        console.log('foreground drawn');
    } else {
        console.log('invalid configuration')
    }
}

fetch(configURL)
   .then( r => r.text() )
   .then( text => playGame(text));

