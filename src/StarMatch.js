import React, { useState } from "react";
import { utils } from "./utils";
import "./StarMatch.css";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarDisplay";

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {utils.range(1, stars).map((starId) => (
            <StarsDisplay key={starId} className='star' />
          ))}
        </div>
        <div className='right'>
          {utils.range(1, 9).map((num) => (
            <PlayNumber key={num} number={num} />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
