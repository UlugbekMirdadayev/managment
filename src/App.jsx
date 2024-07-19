import React from "react";
import "./App.css";
import Router from "./Routes";
import { useLoader } from "./redux/useSelector";
import { MantineProvider } from "@mantine/core";

const App = () => {
  let loader = useLoader();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className={`loader-container ${loader ? "active-loader" : ""}`}>
        <div className="loader"></div>
      </div>
      <Router />
    </MantineProvider>
  );
};

export default App;
