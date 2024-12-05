import React from "react";
import "./App.css";
import Router from "./Routes";
import { useLoader } from "./redux/useSelector";
import { MantineProvider } from "@mantine/core";
import { useLocation } from "react-router-dom";

const App = () => {
  let loader = useLoader();
  const { pathname } = useLocation();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div
        className={`loader-container ${
          pathname !== "/login" ? (loader ? "active-loader" : "") : ""
        }`}
      >
        <div className="loader"></div>
      </div>
      <Router />
    </MantineProvider>
  );
};

export default App;
