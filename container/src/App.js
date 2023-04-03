import React, { lazy, Suspense, useState, useEffect } from "react";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Progress from "./components/Progress";

const AuthLazy = lazy(() => import("./components/AuthAppComponent"));
const MarketingLazy = lazy(() => import("./components/MarketingAppComponent"));
const DashboardLazy = lazy(() => import("./components/DashboardAppComponent"));

const history = createBrowserHistory();

export const App = () => {
  const [isSignin, setIsSignin] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  useEffect(() => {
    if (isSignin) {
      history.push("/dashboard");
    }
  }, [isSignin]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignin={isSignin} onSignOut={() => setIsSignin(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignin={() => setIsSignin(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignin && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
