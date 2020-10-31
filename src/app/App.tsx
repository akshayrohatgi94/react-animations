import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardHover from "./container/card-hover/card-hover";
import IsometricMedia from "./container/isometric-media/isometric-media";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/animation2">
          <IsometricMedia></IsometricMedia>
        </Route>
        <Route path="/">
          <CardHover></CardHover>;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
