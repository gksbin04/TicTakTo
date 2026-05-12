import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every((square) => square !== null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const currentPlayer = isXNext ? 'X' : 'O';
  let status;

  if (winner) {
    status = `🎉 승자: ${winner}`;
  } else if (isBoardFull) {
    status = '🤝 무승부!';
  } else {
    status = `현재 차례: ${currentPlayer}`;
  }

  return (
    <div className="app">
      <h1>⭕ 틱택토</h1>
      <div className="game-container">
        <div className="status">{status}</div>
        <div className="board">
          {board.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <button className="reset-btn" onClick={resetGame}>
          게임 다시 시작
        </button>
      </div>
    </div>
  );
}

export default App;
