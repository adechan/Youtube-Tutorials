import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DivGrows from "./components/DivGrows";
import FadeImages from "./components/FadeImages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fade-images">
          <FadeImages />
        </Route>

        <Route path="/div-grows">
          <DivGrows />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
