import React, { lazy, Suspense, useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const AuthLazy = lazy(() => import("./components/AuthAppComponent"));
const MarketingLazy = lazy(() => import("./components/MarketingAppComponent"));

export const App = () => {
  const [isSignin, setIsSignin] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignin={isSignin} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignin={setIsSignin} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
