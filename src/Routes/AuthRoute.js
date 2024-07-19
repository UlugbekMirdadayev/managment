import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/Sign up/SignUp";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoute;
