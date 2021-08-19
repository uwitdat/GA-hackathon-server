import React from 'react';
import { Link } from "react-router-dom";
import Translate from "../Translate/Translate";
import './LandingPage.css'

export default class LandingPage extends React.Component {
    render(){
    return (
      <div id="container">
          <h1>Welcome to Immigrow!</h1>
          <Link to="/login">
          <div className="Home-block">Login or Signup</div>
          </Link>
          <div id="google_translate_element"></div>
          <Translate />

      </div>
  );
  }}
