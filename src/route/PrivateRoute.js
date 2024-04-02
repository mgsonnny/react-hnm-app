import React from "react";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// const PrivateRoute = ({authenticate}) => {
//   return authenticate == true? <ProductDetail/>:<Navigate to="/login"/>
// }

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
