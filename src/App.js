import React from "react";
import "./App.css";
import Home from "./pages/Home";
import BreedDetails from "./pages/BreedDetails";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {
  return (
    <AlertProvider template={AlertTemplate} >
    <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/breedDetails">
        <BreedDetails />
      </Route>
    </Switch>
    </Router>
    </AlertProvider>
  );
}

export default App;
