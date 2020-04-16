import React from "react";
import { colors } from "./utils";

const PlayNumber = ({ number, status, onClick }) => {
  return (
    <button className='number' onClick={() => onClick(number, status)} style={{backgroundColor: colors[status]}}>
      {number}
    </button>
  );
};
export default PlayNumber;
