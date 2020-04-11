import React from "react";

const PlayNumber = ({ number }) => {
  return (
    <button className='number' onClick={() => console.log("Num", number)}>
      {number}
    </button>
  );
};
export default PlayNumber;
