import { Link } from "react-router-dom";

import logo from "../assets/images/logo-vinted.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="search">
        <input type="search" placeholder="Recherche des articles"></input>
      </div>
      <div className="login-connect">
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <div className="button-buy">
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
