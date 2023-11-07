import React from "react";
import Menu from "../Menu/Menu";

const start = () => {
  console.log("start");
};

function Game({ rows, columns }) {
  return (
    <div className="Game">
      <Menu onClick={start} />
      Rows {rows}, Columns {columns}
    </div>
  );
}

export default Game;