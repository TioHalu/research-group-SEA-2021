import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './style/style.css';
import LandingPage from './pages/LandingPage';
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
