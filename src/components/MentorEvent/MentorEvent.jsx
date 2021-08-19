import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";
import { useState } from "react";
import "./MentorEvent.css";

const MentorEvent = ({ event }) => {
  const [attending, setAttending] = useState(false);

  const handleAttend = () => {
    setAttending(!attending);
  };
  return (
    <div className="event-container">
      <h4>{event.eventName}</h4>
      <p className="event-date">{event.dateTime}</p>

      {attending ? (
        <div className="attend-container">
          <p className="attend-txt">
            Attending: <span className="check">{event.name}</span>{" "}
            <span>&#10004;</span>
          </p>
          <p>
            Event link: <span className="event-link">{event.link}</span>
          </p>
          <ImRadioChecked className="btn-attend" onClick={handleAttend} />
        </div>
      ) : (
        <div className="attend-container">
          <p className="unattend-txt"> Click to attend: </p>
          <ImRadioUnchecked className="btn-unattend" onClick={handleAttend} />
        </div>
      )}
    </div>
  );
};

export default MentorEvent;
