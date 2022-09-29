import React from "react";
import "./Question.css";

const Question = ({ question }) => {
  return (
    <div className="question-container">
      <h2>{question.questions}</h2>
      <p>{question.answer}</p>
    </div>
  );
};

export default Question;
