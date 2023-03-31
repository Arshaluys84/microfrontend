import React from "react";

import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import { MarketingAppComponent } from "./components/MarketingAppComponent";

export const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingAppComponent />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
