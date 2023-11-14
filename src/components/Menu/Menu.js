const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Lets Play Tetris
      </button>
    </div>
  );
};

export default Menu;
