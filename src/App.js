import React from "react";
import { Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
// import { store } from './store/store.js'
import "./App.css";
import Header from "./components/Navigation/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
