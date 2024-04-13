import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor() {
    super();
    this.setState = {
      query: "",
    };
  }
  render() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const currentDay = daysOfWeek[date.getDay()];
    const currentMonth = monthsOfYear[date.getMonth()];
    const handleQuery = () => {
      console.log("SEARCHED");
    };
    const toggleMenu = () => {
      let menu=document.querySelector(".lower");
        menu.classList.toggle('open');
    };
    
    return (
      <div>
        <div className="nav-bar">
          <div className="upper">
            <Link to="/">INSIGHTIFY</Link>
            <div className="right">
              <p>
                {currentDay} {date.getDate()} {currentMonth},{" "}
                {date.getFullYear()}
              </p>
            </div>
          </div>
          <hr />
          <div className="lower">
            <div id="hamburger-icon" onClick={toggleMenu}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <ul>
              {/* <li>INDIA</li> */}
              <li>
                <Link to="/india" onClick={toggleMenu}>INDIA</Link>
              </li>
              <li>
                <Link to="/science" onClick={toggleMenu}>SCIENCE</Link>
              </li>
              <li>
                <Link to="/health" onClick={toggleMenu}>HEALTH</Link>
              </li>
              <li>
                <Link to="/business" onClick={toggleMenu}>BUSINESS</Link>
              </li>
              <li>
                <Link to="/food" onClick={toggleMenu}>FOOD</Link>
              </li>
              <li>
                <Link to="/entertainment" onClick={toggleMenu}>ENTERTAINMENT</Link>
              </li>
              <li>
                <Link to="/sports" onClick={toggleMenu}>SPORTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
