import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import { MarketingAppComponent } from "./components/MarketingAppComponent";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppComponent />
      </div>
    </BrowserRouter>
  );
};
