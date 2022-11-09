import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
