import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import App from './App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <>
    <Routing /> 
  </>,
    document.getElementById('root'))