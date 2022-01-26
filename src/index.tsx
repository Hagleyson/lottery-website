import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "@globalStyle/GlobalStyle";
import App from "@main/App";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
