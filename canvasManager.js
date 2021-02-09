const canvasBackground = document.getElementById('canvas-background');
const canvasItems = document.getElementById('canvas-items');
const canvasPlayer = document.getElementById('canvas-player');

const ctxItems = canvasItems.getContext('2d');
const ctxBackground = canvasBackground.getContext('2d');
const ctxPlayer = canvasPlayer.getContext('2d');


ctxBackground.fillStyle = 'blue';
ctxBackground.fillRect(0,0, 200, 200);

ctxItems.fillStyle = 'green';
ctxItems.fillRect(50, 50, 100, 100);

ctxPlayer.fillStyle = 'red';
ctxPlayer.fillRect(75, 75, 50, 50)