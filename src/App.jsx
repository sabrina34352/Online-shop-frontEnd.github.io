import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Plans from "./components/menustuff/plans";
import Profile from "./components/menustuff/profile";
import Menu from "./components/menustuff/menu";
import SignIn from "./components/menustuff/signIn";
import Home from "./components/menustuff/home";
import Footer from "./components/fotter";

function App() {
  return (
    <div className="WholePage">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;