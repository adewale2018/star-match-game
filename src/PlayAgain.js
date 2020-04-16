import React from "react";

const PlayAgain = ({ resetGame }) => {
  return (
    <div className='game-done'>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
