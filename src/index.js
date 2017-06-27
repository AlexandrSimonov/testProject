import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import RouterComponent from "./router";
import App from "./components/App/App";
import Wrapper from "./components/Wrapper/Wrapper";
import {store} from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <Wrapper>
          <RouterComponent />
        </Wrapper>
      </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
