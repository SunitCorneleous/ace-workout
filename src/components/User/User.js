import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = () => {
  return (
    <div className="user-box">
      {/* image and name */}
      <div className="user">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
        <div className="user-detail">
          <h3>Sunit Corneleous</h3>
          <div className="user-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      {/* user informations */}
      <div className="user-info">
        <div className="weight">
          <h3>72 Kg</h3>
          <p>Weight</p>
        </div>
        <div className="height">
          <h3>6'1"</h3>
          <p>Height</p>
        </div>
        <div className="age">
          <h3>23 years</h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default User;
