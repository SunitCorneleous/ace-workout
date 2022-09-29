import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("questions.json")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div className="questions-container">
      <h1>Questions and anwsers</h1>
      {questions.map(question => (
        <Question key={question.id} question={question}></Question>
      ))}
    </div>
  );
};

export default Questions;
