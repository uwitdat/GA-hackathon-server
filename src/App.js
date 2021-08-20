import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MentorsPage from "./components/MentorsPage/MentorsPage";
import CommunityEvents from "./components/CommunityEvents/CommunityEvents";
import CommunityGroups from "./components/CommunityGroups/CommunityGroups";
import Forum from "./components/Forum/Forum";

import { UserContext } from "./components/UserContext/UserContext";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState({
    user: null,
    name: "",
    email: "",
    password: "",
    language: "",
    hobbies: "",
    age: "",
    bio: "",
  });



  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
        <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/details" component={UserDetailsPage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/mentors" component={MentorsPage} />
          <Route path="/meetups" component={CommunityEvents} />
          <Route path="/groups" component={CommunityGroups} />
          <Route path="/forum" component={Forum} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}
