import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import New from "./pages/New";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos/:id" component={Detail} />
        <Route path="/new" component={New} />
        <Route exact path="/" component={Home} />
        <Route path="/err" component={ServerError} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
