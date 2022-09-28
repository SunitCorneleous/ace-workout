import React, { useState } from "react";
import User from "../User/User";
import "./Details.css";

const Details = ({ time }) => {
  const [breakTime, setBreakTime] = useState("");

  const addBreakTimeHandler = input => {
    setBreakTime(input);
  };
  return (
    <div className="details">
      <User></User>
      <div className="details-functions">
        <div className="add-break">
          <h2>Add A Break</h2>
          <div className="details-container">
            <div className="btn-group">
              <button onClick={e => addBreakTimeHandler(e.target.innerText)}>
                10s
              </button>
              <button onClick={e => addBreakTimeHandler(e.target.innerText)}>
                20s
              </button>
              <button onClick={e => addBreakTimeHandler(e.target.innerText)}>
                30s
              </button>
              <button onClick={e => addBreakTimeHandler(e.target.innerText)}>
                40s
              </button>
              <button onClick={e => addBreakTimeHandler(e.target.innerText)}>
                50s
              </button>
            </div>
          </div>
        </div>
        <div className="exercise-details">
          <h2>Exercise Details</h2>
          <div className="details-container">
            <p>Exercise time</p>
            <strong>
              <p>{time}m</p>
            </strong>
          </div>
          <div className="details-container">
            <p>Break time</p>
            <strong>
              <p>{breakTime || "0s"}</p>
            </strong>
          </div>
        </div>
        <button className="add-to-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
