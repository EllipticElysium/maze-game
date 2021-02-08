const settings = {
    gridSize: 10
};
let rooms = [];

for (i = 0; i < settings.gridSize ** 2; i++) {
    rooms.push(new room(i, settings.gridSize));
}

rooms[5].changeRoom('down');



