import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home";
import { Provider } from "react-redux";
import store from "./store";
import GifDetails from "./layouts/GifDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/gifs/:id" component={GifDetails} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
