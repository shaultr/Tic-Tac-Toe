export const checkWin = (newBoard) => {

    const optionsWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]
    for (let i = 0; i < optionsWin.length; i++) {
        const [a, b, c] = optionsWin[i];
        if (newBoard[a] === player && newBoard[b] === player && newBoard[c] === player) {
            return true;
        }
    }

}
