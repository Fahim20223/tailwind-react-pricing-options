import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import ResultChart from "./Components/ResultChart/ResultChart";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <h1 className="text-7xl"></h1>
      </header>
      <main></main>
      <ResultChart></ResultChart>
    </>
  );
}

export default App;
