import './App.css';
import Footer from './compnents/Footer';
import Landingpage from './compnents/Landingpage';
import Navbar from './compnents/Navbar';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  // apiKey = ;
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landingpage key="top" apiKey={process.env.REACT_APP_API_KEY} category="top"  />}></Route>

            <Route path="/india" element={<Landingpage key="india" apiKey={process.env.REACT_APP_API_KEY} category="top" country="in" />}></Route>

            <Route path="/science" element={<Landingpage key="science" apiKey={process.env.REACT_APP_API_KEY} category="science"  />}></Route>

            <Route path="/health" element={<Landingpage key="health" apiKey={process.env.REACT_APP_API_KEY} category="health"  />}></Route>

            <Route path="/business" element={<Landingpage key="business" apiKey={process.env.REACT_APP_API_KEY} category="business"  />}></Route>

            <Route path="/food" element={<Landingpage key="food" apiKey={process.env.REACT_APP_API_KEY} category="food"  />}></Route>

            <Route path="/entertainment" element={<Landingpage key="entertainment" apiKey={process.env.REACT_APP_API_KEY} category="entertainment"  />}></Route>

            <Route path="/sports" element={<Landingpage key="sports" apiKey={process.env.REACT_APP_API_KEY} category="sports"  />}></Route>
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }

}
