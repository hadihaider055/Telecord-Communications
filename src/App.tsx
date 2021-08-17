import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomePage from "./Pages/Home";
import LandingPage from "./Pages/Landing Page";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
