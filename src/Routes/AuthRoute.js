import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/Sign up/SignUp";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoute;
