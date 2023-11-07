import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    alert("You have no access to admin page");
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
