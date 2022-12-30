const checkWinner = (gameBoardState:string[]) =>{

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (gameBoardState[a] && gameBoardState[a] === gameBoardState[b] && gameBoardState[a] === gameBoardState[c]) {
            return gameBoardState[a];
        }
    }
    return null;
}

export{checkWinner}