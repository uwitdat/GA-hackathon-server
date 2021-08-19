import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css'

export default class LandingPage extends React.Component {
    render(){
    return (
      <div id="container">
          <h1>Welcome to Immigrow!</h1>
          <Link to="/login">
          <div className="Home-block">Login or Signup</div>
        </Link>

      </div>
  );
  }}
