
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./App.css";

import { Toaster } from "react-hot-toast";

function AppRouter() {
  return (
    <Router>
      <App />
      {/* <Toaster /> */}
      

    </Router>
  );
}

export default AppRouter;