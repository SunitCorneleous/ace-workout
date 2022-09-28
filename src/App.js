import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Exercises from "./components/Exercises/Exercises";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setExercises(data));
  }, []);

  return (
    <div className="App">
      <Exercises></Exercises>
      <Details></Details>
      {/* bottom questions and answers */}
    </div>
  );
}

export default App;
