import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./scss/global.scss";

import { Provider } from "react-redux";
import Store from "./redux/storage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <div className="main_container">
        <h1 className="spacepainel_title">Space Painel</h1>
        <div className="card_container">
          <Routes />
        </div>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
