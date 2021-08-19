import "./Login.css";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: name,
      email: email,
      password: password
    });
    history.push("/details");
  };

  return (
    <div className="LoginPage-container">
      <div className="Welcome-container">
        <h1>Welcome to Immigrow!</h1>
        <p className="Login-signup">Sign Up</p>
      </div>

      <div className="Login-container">
        <div className="Login-logo">
          <p>Logo</p>
        </div>
        <form onSubmit={handleSubmitUser}>
          <input
            className="Login-input"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <input
            className="Login-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <input
            className="Login-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <button type="submit" className="Login-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 