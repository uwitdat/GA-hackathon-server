import { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";
import FooterBar from "../FooterBar/FooterBar";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  const getMentors = async () => {
    const res = await axios.get("http://localhost:3001/mentors");
    setMentors(res.data);
  };
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div>
      <DetailsHeader />
      {mentors.map((mentor) => (
        <Mentor key={mentor._id} mentor={mentor} />
      ))}
      <div className="btn-container">
        <Link to="/homepage">
          <IoChevronBackOutline className="back-btn" />
        </Link>
      </div>
      <FooterBar />
    </div>
  );
};
export default MentorsPage;
