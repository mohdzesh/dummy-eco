import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default Error;
