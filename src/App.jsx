import axios from "axios";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import MarksChart from "./Components/MarksChart/MarksChart";
import NavBar from "./Components/NavBar/NavBar";
import ResultChart from "./Components/ResultChart/ResultChart";
import { Suspense } from "react";
const marksPromise = axios("marksData.json");

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <h1 className="text-7xl"></h1>
      </header>
      <main></main>
      <ResultChart></ResultChart>
      <Suspense fallback={"Loading...."}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
    </>
  );
}

export default App;
