import React from "react";
import "./styles.css";

interface cellBoardProps {
  value: number | string;
  handlerClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  cellStatus: null | string;
}

const CellBoard = (props: cellBoardProps) => {
  return (
    <button onClick={props.handlerClick} value={props.value}>
      {props.cellStatus}
    </button>
  );
};

export default CellBoard;
