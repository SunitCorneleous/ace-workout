import React from "react";
import User from "../User/User";
import "./Details.css";

const Details = ({ time }) => {
  return (
    <div className="details">
      <User></User>
      <div className="details-functions">
        <div className="add-break">
          <h2>Add A Break</h2>
          <div className="details-container">
            <div className="btn-group">
              <button>10s</button>
              <button>20s</button>
              <button>30s</button>
              <button>40s</button>
              <button>50s</button>
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
            <p>15s</p>
          </div>
        </div>
        <button className="add-to-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
