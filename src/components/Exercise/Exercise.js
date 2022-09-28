import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
  const { id, image, name, about, age, time } = exercise;
  return (
    <div className="exercise-card">
      <img className="image" src={image} alt="exercise" />
      <h2>{name}</h2>
      <p>{about.slice(0, 110)}</p>
      <p>
        For Age: <strong>{age}</strong>
      </p>
      <p>
        Time Required: <strong>{time}</strong>
      </p>
    </div>
  );
};

export default Exercise;
