import "./UserDetails.css";

import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useHistory } from "react-router-dom";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

const UserDetailsPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [bio, setBio] = useState("");
  const [char, setChar] = useState(0)
  const history = useHistory();

  const handleAddDetails = (e) => {
    e.preventDefault();
    setUser({
      ...user,

      bio: bio
    });
    history.push("/homepage");
  };

  const handleSetBio = (e) => {
    setBio(e.target.value)
    setChar(char + 1)
  }


  return (
    <div className="UserDetails-container">
      <DetailsHeader />

      <div className='img-upload'>
        <div className='img-contain'>
          <p><span>&#43;</span>ADD A PHOTO</p>
        </div>
      </div>
      <div className='text-info-User'>
        <p className='Details-txt'>Hi,</p>
        <p className='Details-txt margin-btn'>{user.name}!</p>
        <p className='margin-btn'>Welcome to Immigrow! Please fill out your bio so that you can connect with other in your community!</p>
        <p className='Details-txt margin-btn'>Bio</p>
      </div>
      <div className="UserDetails-form-container">

        <form onSubmit={handleAddDetails}>

          <textarea
            className="DetailsPage-txt-area"
            placeholder="Write a short bio about yourself..."
            value={bio}
            onChange={handleSetBio}
          ></textarea>
          <div className='char-remain'>
            <p>{char}/200 characters</p>

          </div>
          <button type="submit" className="Login-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;
