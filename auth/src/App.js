import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export const App = ({ onSignin, history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignin={onSignin} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignin={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
