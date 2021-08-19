import { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";

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
      <h3>Click a mentor to show upcoming seminars</h3>
      {mentors.map((mentor) => (
        <Mentor key={mentor._id} mentor={mentor} />
      ))}
      <div className="btn-container">
        <Link to="/homepage">
          <IoChevronBackOutline className="back-btn" />
        </Link>
      </div>
    </div>
  );
};
export default MentorsPage;
