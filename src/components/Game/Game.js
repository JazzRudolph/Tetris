import Menu from "../Menu/Menu";

const Game = ({ rows, columns }) => {
  const start = () => {
    console.log("start");
  };
  return (
    <div className="game">
      <Menu onClick={start} />
    </div>
  );
};

export default Game;
