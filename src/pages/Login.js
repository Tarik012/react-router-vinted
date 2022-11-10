import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const url = "https://lereacteur-vinted-api.herokuapp.com/user/login";

const Login = ({ handleToken }) => {
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post(url, {
        email,
        password,
      });
      //console.log("resp.data==>", resp.data);

      setData(resp.data);
      handleToken(resp.data.token); // j'enregistre mon token
      navigate("/"); // je redirige vers la page d'accueil Home
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="div-form">
      <h1>Se connecter</h1>
      <div>
        <form className="signup" onSubmit={handleSubmit}>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Adresse email"
            value={email}
            name="inputEmail"
          ></input>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Mot de passe"
            value={password}
            name="inputPassword"
          ></input>
          <input type="submit" value="Se connecter"></input>
        </form>
      </div>
      <Link to="/signup">
        <div className="link-to-signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </div>
      </Link>
    </div>
  );
};

export default Login;
