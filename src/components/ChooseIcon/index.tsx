import React from "react";
import "./styles.css";

const ChooseIcon = (props: any) => {
  return (
    <>
      <h2>Choose your Icon</h2>
      <button onClick={()=>props.setPlayerIcon("X")}>X</button>
      <button onClick={()=>props.setPlayerIcon("O")}>O</button>
    </>
  );
};

export default ChooseIcon;
