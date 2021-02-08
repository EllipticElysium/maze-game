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