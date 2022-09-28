import React from "react";
import { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setExercises(data));
  }, []);

  return (
    <div className="exercises">
      <h1>ACE WORKOUT</h1>
      <h2>Select Exercises</h2>
      <div className="exercise-container">
        {exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={exercise}></Exercise>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
