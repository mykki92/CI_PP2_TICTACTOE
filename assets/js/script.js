

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