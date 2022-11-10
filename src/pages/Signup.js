import { useState } from "react";
import axios from "axios";
const url = "https://lereacteur-vinted-api.herokuapp.com/user/signup";

const Signup = () => {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post(url, {
        email,
        username: name,
        password,
        newsletter: true,
      });
      console.log(resp.data);
      setData(resp.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  return isLoading ? (
    <div className="div-form-signup">
      <h1>S'inscrire</h1>
      <div>
        <form className="signup" onSubmit={handleSubmit}>
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
          <input type="submit" value="S'inscrire"></input>
        </form>
      </div>
    </div>
  ) : (
    <p>TOKEN OU REPONSE ATTENDUE : {data}</p>
  );
};

export default Signup;
