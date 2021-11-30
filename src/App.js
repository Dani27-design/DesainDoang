import React from "react";
import Header from "./Components/Header";
import Gimmick from "./Components/Gimmick";
import About from "./Components/About";
import Service from "./Components/Service";
import Portofolio from "./Components/Portofolio";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Gimmick />
        <About />
        <Service />
        <Portofolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
