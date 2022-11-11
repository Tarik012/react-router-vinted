import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "https://lereacteur-vinted-api.herokuapp.com/user/signup";

const Signup = ({ handleToken }) => {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const resp = await axios.post(url, {
        email,
        username: name,
        password,
        newsletter: newsletter,
      });
      //console.log("resp.data==>", resp.data);

      setData(resp.data);
      if (resp.data.token) {
        handleToken(data.token); // j'enregistre mon token
      }

      navigate("/"); // je redirige vers la page d'accueil Home
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
      switch (error.response.status) {
        case 409:
          setErrorMessage("Please renseign another email.");
          break;
        case 400:
          setErrorMessage("Please fill all input of the form.");
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="div-form">
      <h1>S'inscrire</h1>
      <div>
        <form className="signup" onSubmit={handleSubmit}>
          <span style={{ color: "red" }}>{errorMessage}</span>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            placeholder="Nom d'utilisateur"
            value={name}
            name="inputText"
          ></input>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Email"
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
          <div className="newsletter">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            ></input>
            <p>S'inscrire à notre newsletter</p>
          </div>

          <input type="submit" value="S'inscrire"></input>
        </form>
      </div>
    </div>
  );
};

export default Signup;
