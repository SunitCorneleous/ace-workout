import React from "react";
import User from "../User/User";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      <User></User>
      <div className="details-functions">
        <div className="add-break">
          <h2>Add A Break</h2>
          <div className="details-container">
            <p>Button group</p>
          </div>
        </div>
        <div className="exercise-details">
          <h2>Exercise Details</h2>
          <div className="details-container">
            <p>Exercise time</p>
            <p>200m</p>
          </div>
          <div className="details-container">
            <p>Break time</p>
            <p>15s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
