import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FooterBar from '../FooterBar/FooterBar'
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Home-container">
      <DetailsHeader />

      <FooterBar />
    </div>
  );
};

export default HomePage;
