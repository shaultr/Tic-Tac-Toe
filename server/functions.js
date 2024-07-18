const checkWin = (board, player) => {

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
        if (board[a] === player && board[b] === player && board[c] === player) {
            return { isWin: true, locations: [a, b, c] };
        }
    }
    return { isWin: false, locations: [] };
};

module.exports = { checkWin };
