import MentorEvent from "../MentorEvent/MentorEvent";
import { useState } from "react";
import "./Mentor.css";

const Mentor = ({ mentor }) => {
  const [showEvents, setShowEvents] = useState(false);
  const handleShowEvents = () => {
    setShowEvents(!showEvents);
  };
  return (
    <div className="Mentor-container">
      <h3 className="Mentor-title">{mentor.name}</h3>
      <img
        style={{
          height: "10rem",
          width: "10rem",
          objectFit: "cover",
          borderRadius: "50%"
        }}
        src={mentor.avatar}
        alt="mentor"
        onClick={handleShowEvents}
      />
      <p>{mentor.creds}</p>

      {showEvents ? (
        <>
          <h3>Upcoming Seminars:</h3>
          {mentor.events.map((event, idx) => (
            <MentorEvent key={idx} event={event} />
          ))}
        </>
      ) : null}
      <div className="line-container">
        <hr className="design-line" />
      </div>
    </div>
  );
};

export default Mentor;
