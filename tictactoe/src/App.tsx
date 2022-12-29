import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [ gameBoardState, setGameBoardState ] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <GameBoard
        gameBoardState={gameBoardState}
        setGameBoardState={setGameBoardState}
      />
    </div>
  );
}

export default App;
