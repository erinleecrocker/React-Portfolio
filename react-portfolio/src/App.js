import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
  

export default App;

