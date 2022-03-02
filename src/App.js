import GameGrid from "./GameGrid";

function App() {
  return (
    <div className="app">
      <div className="container flex items-center justify-center h-screen flex-col">
        <header>
          <h1 className="text-center text-4xl mb-10">Chordle</h1>
        </header>
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
