import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import { App } from "./App";

const mount = (el, { onNavigate, onSignin, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignin={onSignin} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const rootEl = document.querySelector("#_auth-dev-root");
  if (rootEl) {
    mount(rootEl, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
