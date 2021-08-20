import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Profile-page">
      <div className="Profile-container">
        <h1>Welcome: {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Language: {user.language}</p>
        <p>Hobbies: {user.hobbies}</p>
        <p>Bio: {user.bio}</p>
      </div>
      <div className="btn-container">
        <Link to="/homepage">
          <IoChevronBackOutline className="back-btn" />
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
