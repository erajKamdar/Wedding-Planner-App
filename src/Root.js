import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "./src";
// import App from "../src/App";
// import configureStore from "./configureStore";
// import configureStore from "./Redux/configureStore";
// import Switch from "../src/switch";
import App from "./App";
import configureStore from "./Redux/configureStore";

const store = configureStore();

function Root() {
    return (
      <Provider store={store}>
        <Router>
          {/* <Switch /> */}
          <App />
        </Router>
      </Provider>
    );
  }

  export default Root;