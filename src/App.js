import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom"

import MainRouter from "./components/routing/routers/MainRouter";

function App() {
  return (
    <Router>
      <MainRouter/>
    </Router>
  );
}

export default App;
