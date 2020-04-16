import React, { useState } from "react";
import './StarMatch.css';
import Game from "./Game";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} className='StarMatch' />;
};

export default StarMatch;
