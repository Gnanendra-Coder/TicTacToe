// script.js
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const restartButton = document.getElementById('restart');
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    
    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let [a, b, c] of winPatterns) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes('') ? null : 'Tie';
    }
    
    function handleClick(event) {
        const index = event.target.dataset.index;
        if (board[index] || checkWinner()) return;
        
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        const winner = checkWinner();
        
        if (winner) {
            setTimeout(() => alert(winner === 'Tie' ? "It's a Tie!" : `${winner} Wins!`), 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
    
    function restartGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        squares.forEach(square => square.textContent = '');
    }
    
    squares.forEach(square => square.addEventListener('click', handleClick));
    restartButton.addEventListener('click', restartGame);
    
    playButton.addEventListener('click', () => {
        backgroundMusic.play();
    });

    pauseButton.addEventListener('click', () => {
        backgroundMusic.pause();
    });

    // Optionally start playing music automatically
    backgroundMusic.play();
});
