import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.scss";

const Login = ({ handleToken }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );

      handleToken(response.data.token);

      navigate("/publish");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" className="form-box" onSubmit={handleSubmit}>
      <h1>Se connecter</h1>

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <input type="submit" value="Connexion" />
    </form>
  );
};

export default Login;
