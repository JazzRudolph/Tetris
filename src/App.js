
import './App.css';
import Games from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <h1>Hello Jazz lets build tetris!</h1>
      <Games rows={20} columns={10} />
  </div>
  );
}

export default App;
