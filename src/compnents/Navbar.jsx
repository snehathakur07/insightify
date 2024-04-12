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
    const handleQuery=()=>{
        console.log("SEARCHED")
    }
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
            <ul>
              {/* <li>INDIA</li> */}
              <li>
                <Link to="/india">INDIA</Link>
              </li>
              <li>
                <Link to="/science">SCIENCE</Link>
              </li>
              <li>
                <Link to="/health">HEALTH</Link>
              </li>
              <li>
                <Link to="/business">BUSINESS</Link>
              </li>
              <li>
                <Link to="/food">FOOD</Link>
              </li>
              <li>
                <Link to="/entertainment">ENTERTAINMENT</Link>
              </li>
              <li>
                <Link to="/sports">SPORTS</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    );
  }
}
