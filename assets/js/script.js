const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');

let turn = true;

function playerMove () {
    document.getElementsByClassName('grid-item').on('drop', function{
        
    })
}

//drag and drop functions
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let nodeCopy = document.getElementById(data).cloneNode(true);
    event.target.appendChild(nodeCopy);
}