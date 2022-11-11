import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const url = "https://lereacteur-vinted-api.herokuapp.com/user/login";

const Login = ({ handleToken }) => {
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const resp = await axios.post(url, {
        email,
        password,
      });
      //console.log("resp.data==>", resp.data);

      setData(resp.data);
      if (resp.data.token) {
        handleToken(resp.data.token); // j'enregistre mon token
      }
      navigate("/"); // je redirige vers la page d'accueil Home
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data); //récupère le message d'erreur venant du serveur

      switch (error.response.status) {
        case 400:
          setErrorMessage("Please fill all input of the form");
          break;
        case 401:
          setErrorMessage("Please renseign another email.");
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="div-form">
      <h1>Se connecter</h1>
      <div>
        <form className="signup" onSubmit={handleSubmit}>
          <span style={{ color: "red" }}>{errorMessage}</span>
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
