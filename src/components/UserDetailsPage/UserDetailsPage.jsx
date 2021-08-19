import "./UserDetailsPage.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useHistory } from "react-router-dom";

const UserDetailsPage = () => {
  const { user, setUser } = useContext(UserContext);

  console.log("USER DETAILS", user);

  const [lan, setLan] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const history = useHistory();

  const handleAddDetails = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      language: lan,
      hobbies: hobbies,
      age: age,
      bio: bio
    });
    history.push("/homepage");
  };

  return (
    <div className="UserDetails-container">
      <h1 className="UserDetails-title">Set Up Your User Profile:</h1>

      <div className="UserDetails-form-container">
        <form onSubmit={handleAddDetails}>
          <input
            className="Login-input"
            type="text"
            placeholder="Language"
            value={lan}
            onChange={(e) => setLan(e.target.value)}
          />
          <input
            className="Login-input"
            type="text"
            placeholder="Hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input
            className="Login-input"
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <textarea
            className="DetailsPage-txt-area"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button type="submit" className="Login-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="btn-container">
        <Link to="/">
          <IoChevronBackOutline className="back-btn" />
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsPage;
