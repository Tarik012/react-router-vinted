import "./App.css";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Blank from "./components/Blank";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenCookie") || null); // le cookie sera le token sinon null

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenCookie", token, { expires: 10 });
    } else {
      setToken(null);
      Cookies.remove("tokenCookie");
    }
  };

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route
          path="/signup"
          element={<Signup handleToken={handleToken} />}
        ></Route>
        <Route
          path="/login"
          element={<Login handleToken={handleToken} />}
        ></Route>
        <Route path="*" element={<Blank />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
