// import React, { useEffect } from "react";
// import AuthRoute from "./AuthRoute";
import MainRoute from "./MainRoute";
// import { useNavigate } from "react-router-dom";
// import SupportRoute from "./SupportRoutes";

const Router = () => {
  // let token = localStorage.getItem("token");
  // let user = JSON.parse(localStorage.getItem("user"));
  // const navigate = useNavigate("");
  // useEffect(() => {
  //   if (!token && !user) {
  //     navigate("/");
  //   }
  // }, [token, navigate, user]);
  return (
    <>
      {/* {token ? (
        user?.user?.roles[0]?.name === "support" ? ( */}
      {/* <SupportRoute /> */}
      {/* ) : ( */}
      {/* // */}
      <MainRoute />
      {/* ) */}
      {/* ) : (
        <AuthRoute />
      )} */}
    </>
  );
};

export default Router;
