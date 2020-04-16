import React, { useState, useEffect } from "react";
import { utils } from "./utils";
import "./StarMatch.css";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarDisplay";
import PlayAgain from "./PlayAgain";

const Game = ({ startNewGame }) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";


  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };
  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };
  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {gameStatus !== "active" ? (
            <PlayAgain resetGame={startNewGame} gameStatus={gameStatus} />
          ) : (
            utils
              .range(1, stars)
              .map((starId) => <StarsDisplay key={starId} className='star' />)
          )}
        </div>
        <div className='right'>
          {utils.range(1, 9).map((num) => (
            <PlayNumber
              key={num}
              number={num}
              status={numberStatus(num)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className='timer Game'>Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
