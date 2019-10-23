var turn = 'X';
var score = {
    'X': 0,
    'O': 0
};
var messages = {
    won: ' has won the game',
    draw: 'Draw'
}

function mark(box) {
    if ((box.className).indexOf("disabled") == -1) {
        box.innerHTML = turn;
        box.classList.add('disabled');
        box.classList.add(turn);
        score[turn] += 1;
        var prevTurn = turn;
        turn = turn === "X" ? "O" : "X";
        if (hasWon(box, prevTurn)) {
            alert(prevTurn + messages.won);
        } else if ((score['X'] + score['O']) == 9) {
            alert(messages.draw);
        }
    }
}

function hasWon(box, prevTurn) {
    var table = document.getElementById('game');
    if (score[prevTurn] >= 3) {
        var classes = box.className.split(/\s+/);
        for (var i = 0; i < classes.length; i += 1) {
            var count = 0;
            if (classes[i].indexOf('row') !== -1 || classes[i].indexOf('col') !== -1 || classes[i].indexOf('dia') !== -1) {
                var elements = table.getElementsByClassName(classes[i]);
                for (var j = 0; j < elements.length; j += 1) {
                    if (elements[j].innerHTML == prevTurn) {
                        count += 1;
                    }
                }
                if (count == 3) {
                    return true;
                }
            }
        }
    }
    return false;
}