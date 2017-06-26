import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import RouterComponent from "./router";
import {store} from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <div className="container-fluid">
      <RouterComponent />
    </div>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
