import React from "react";
import "./styles.css"

const CellBoard = (props: any) => {
  return <button onClick={props.handlerClick} value={props.value}>{props.cellStatus}</button>;
};

export default CellBoard;