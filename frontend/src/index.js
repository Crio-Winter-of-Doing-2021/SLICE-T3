import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import App from './App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getToken from './Token'


const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/token/" component={getToken} />
        {/* <Route path="/about" component={About} />
        <Route path="/service" component={Service} /> */}
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <>
    <Routing /> 
  </>,
    document.getElementById('root'))