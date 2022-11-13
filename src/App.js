import "./App.css";
import "./MultiRangeSlider.css";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Modal from "./components/Modal";

import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Blank from "./components/Blank";
import Search from "./components/Search";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenCookie") || null); // le cookie sera le token sinon null

  const [title, setTitle] = useState("");
  const [minprice, setMinPrice] = useState("");
  const [maxprice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [visible, setVisible] = useState(false); // state pour afficher la modal

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenCookie", token, { expires: 10 });
    } else {
      setToken(null);
      Cookies.remove("tokenCookie");
    }
  };

  // console.log("minprice==>", minprice);
  // console.log("maxprice==>", maxprice);
  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          setToken={setToken}
          search={
            <Search
              title={title}
              minprice={minprice}
              maxprice={maxprice}
              sort={sort}
              setTitle={setTitle}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setSort={setSort} //value => price-desc or price-asc
            />
          }
          visible={visible}
          setVisible={setVisible}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title={title}
                minprice={minprice}
                maxprice={maxprice}
                sort={sort}
              />
            }
          ></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          {/* <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          ></Route>
          <Route
            path="/login"
            element={<Login handleToken={handleToken} />}
          ></Route> */}
          <Route path="*" element={<Blank />}></Route>
        </Routes>
        {visible && (
          <Modal
            setVisible={setVisible}
            signup={
              <Signup handleToken={handleToken} setVisible={setVisible} />
            }
            login={<Login handleToken={handleToken} setVisible={setVisible} />}
          />
        )}
        {/* toujours placer la modal à la fin */}
      </Router>
    </div>
  );
}

export default App;
