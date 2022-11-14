import Cookies from "js-cookie";

import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo-vinted.png";

const Header = ({ token, setToken, search, visible, setVisible }) => {
  const navigate = useNavigate();

  const handleClickDisconnect = () => {
    setToken(null);
    Cookies.remove("tokenCookie");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      {/* Mon composant Search qui vient de App */}
      <div className="search-container">{search}</div>

      {token ? (
        <div className="login-disconnect">
          <button onClick={handleClickDisconnect}>Se déconnecter</button>
        </div>
      ) : (
        <div className="login-connect">
          <button
            onClick={() => {
              setVisible(!visible); // on inverse la valeur de `visible` à chaque click
            }}
          >
            S'inscrire / Se connecter
          </button>
        </div>
        // <div className="login-connect">
        //   <Link to="/signup">
        //     <button>S'inscrire</button>
        //   </Link>
        //   <Link to="/login">
        //     <button>Se connecter</button>
        //   </Link>
        // </div>
      )}

      <div className="button-buy">
        {token ? ( //lien vers page publish si on est connecté
          <Link to="/publish">
            <button>Vends tes articles</button>
          </Link>
        ) : (
          //lien vers page home avec la modal de connexion si on n'est pas connecté
          <Link to="/">
            <button>Vends tes articles</button>
          </Link>
        )}

        {/* <Link to={token !== "" ? "/publish" : "*"}>
          <button>Vends tes articles</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
