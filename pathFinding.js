const pathFinding = function (path) {
    let posicionX = 0;
    let posicionY = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'n') {
            posicionY++;
        } else if (path[i] === 's') {
            posicionY--;
        } else if (path[i] === 'e') {
            posicionX++;
        } else if (path[i] === 'w') {
            posicionX--;
        }
    }
    if ((posicionX === 3 && posicionY === 2) || (posicionX === -4 && posicionY === 3)) {
        return true;
    } else return false
}
