import React, { useEffect, useState } from "react";
import { getItemFromLS, setItemToLS } from "../../utilities/localStorage";
import User from "../User/User";
import "./Details.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ time }) => {
  const [breakTime, setBreakTime] = useState("");

  const addBreakTimeHandler = input => {
    setBreakTime(input);
    setItemToLS(input);
  };

  useEffect(() => {
    const breakTimeFromLS = getItemFromLS();
    setBreakTime(breakTimeFromLS);
  }, []);

  const notify = () => toast(`Well done you have exercised ${time} minutes.`);

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
        <button className="add-to-btn" onClick={notify}>
          Activity Completed
        </button>
      </div>
      <ToastContainer position="top-left" autoClose={3000} transition={Slide} />
    </div>
  );
};

export default Details;
