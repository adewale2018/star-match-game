import React from "react";

const PlayAgain = ({ resetGame, gameStatus }) => {
  return (
    <div className='game-done'>
      <div
        className='message'
        style={{ color: gameStatus === "lost" ? "red" : "green" }}
      >
        {gameStatus === "lost" ? "Game over" : "Nice"}
      </div>
      <button className='play-again' onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
