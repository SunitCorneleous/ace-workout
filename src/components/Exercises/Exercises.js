import React from "react";
import { useEffect, useState } from "react";
import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setExercises(data));
  }, []);

  const addTimeHandler = minute => {
    const newTime = time + parseFloat(minute);
    setTime(newTime);
  };

  return (
    <div className="main-container">
      <div className="exercises">
        <h1>ACE WORKOUT</h1>
        <h2>Select Exercises</h2>
        <div className="exercise-container">
          {exercises.map(exercise => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              timeHandler={addTimeHandler}
            ></Exercise>
          ))}
        </div>
      </div>
      <Details time={time}></Details>
    </div>
  );
};

export default Exercises;
