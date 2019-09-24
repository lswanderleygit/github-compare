import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

// O store vai passar para todos os componentes a informação do estado do redux
import store from "./store";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
