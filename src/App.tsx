import "./App.css";
import GameGrid from "./Components/GameGrid";
import Navbar from "./Components/Navbar";
function App() {
  return( 
  <>
    <nav>
      <Navbar/>
    </nav>

    <main>
      <GameGrid />
    </main>
  </>
)};

export default App;
