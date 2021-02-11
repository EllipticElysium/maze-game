// const canvasBackground = document.getElementById('canvas-background');
// const canvasItems = document.getElementById('canvas-items');
// const canvasPlayer = document.getElementById('canvas-player');

// let gameDimensions = window.innerHeight * 0.80;

// canvasBackground.width = gameDimensions;
// canvasBackground.height = gameDimensions;
// canvasItems.width = gameDimensions;
// canvasItems.height = gameDimensions;
// canvasPlayer.width = gameDimensions;
// canvasPlayer.height = gameDimensions;

// const ctxItems = canvasItems.getContext('2d');
// const ctxBackground = canvasBackground.getContext('2d');
// const ctxPlayer = canvasPlayer.getContext('2d');

// let canvasRect = canvasBackground.getBoundingClientRect();

// const doorMin = gameDimensions * (5/12);
// const doorMax = gameDimensions * (7/12);


// $('.background-image').width(gameDimensions/2);
// $('.background-image').height(gameDimensions/2);


// function drawItems() {
//     ctxItems.clearRect(0, 0, canvasItems.width, canvasItems.height);

//     Object.keys(Room.rooms[player.currentRoom].treasure).forEach(function(index) {
//         let treasure = Room.rooms[player.currentRoom].treasure[index];
//         treasure.update();
//         ctxItems.beginPath();
//         ctxItems.arc(treasure.x, treasure.y, treasure.radius, 0, Math.PI * 2);
//         ctxItems.fillStyle = 'gold';
//         ctxItems.fill();
//     })

//     Object.keys(Room.rooms[player.currentRoom].enemies).forEach(function(index) {
//         let enemy = Room.rooms[player.currentRoom].enemies[index];
//         enemy.update();
//         ctxItems.beginPath();
//         ctxItems.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
//         ctxItems.fillStyle = 'red';
//         ctxItems.fill();
//     })

//     Object.keys(player.projectiles).forEach(function(index) {
//         let Projectile = player.projectiles[index];
//         Projectile.move();
//         ctxItems.beginPath();
//         ctxItems.arc(Projectile.x, Projectile.y, Projectile.radius, 0, Math.PI * 2);
//         ctxItems.fillStyle = 'blue';
//         ctxItems.fill();
//     })
// }

function clearPlayer() {
    ctxPlayer.clearRect(0,0, canvasPlayer.width, canvasPlayer.height);
}

function drawPlayer() {
    ctxPlayer.beginPath();
    ctxPlayer.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctxPlayer.fillStyle = 'purple';
    ctxPlayer.fill();
}

function updatePlayer() {
    if(player.finished !== true) {
        clearPlayer();
        player.move();
        drawPlayer();

        requestAnimationFrame(updatePlayer);
    }
}

// function updateItems() {
//     if(player.finished !== true) {
//         drawItems();

//         requestAnimationFrame(updateItems);
//     }
// }


//detect space bar
//paints a red x on the floor to mark that the player has visited there before

//have a class for background and foreground canvas
//no need for a canvas manager

//make a superclass that all foreground objects derive from
//split each class into it's own file

//create a better hit detection algorithm that can take any two objects and return true if they collide false if not
//must only return true once per collision, no pass through.
//can test circle x circle and circle x line as my two test cases.

