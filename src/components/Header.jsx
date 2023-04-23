import React from "react";
import "./Header.css";
import Calendar from "./icons/calendar.svg";
import Location from "./icons/location.svg";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderImage">
        <div className="HeaderContent">
          <h1>
            WELCOME TO
            <br />
            <span>PRODUCT EXPO'23</span>
          </h1>
        </div>
      </div>
      <div className="lowerpart">
        <div className="loweritems">
          <div className="cal">
            <img src={Calendar} alt="Calendar" />
            <p className="caltext">25th April 2023</p>
          </div>
          <div className="loc">
            <img src={Location} alt="Location" />
            <p className="loctext">T.P.GANESHAN AUDITORIUM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
