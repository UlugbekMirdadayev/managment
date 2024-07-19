import React from "react";
import "./App.css";
import Router from "./Routes";
import { useLoader } from "./redux/useSelector";

const App = () => {
  let loader = useLoader()
  return (
    <>
    <div className={`loader-container ${loader ? "active-loader":""}`}>
    <div className="loader"></div>
    </div>
      <Router />
    </>
  );
};

export default App;
