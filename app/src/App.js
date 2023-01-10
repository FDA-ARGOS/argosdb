import React, { Component } from "react";
import Homepage from "./components/home_page";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {

  state = {
  };

  render() {
    
    return (
      <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Homepage/>
            )}
          />
        </Switch>
      </Router>
      </div>
    );

    
  }
}

export default App;
