import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Blank from "./components/Blank";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route path="*" element={<Blank />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
