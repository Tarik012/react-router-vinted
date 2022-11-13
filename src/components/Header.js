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
          <button onClick={handleClickDisconnect}>Deconnexion</button>
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
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
