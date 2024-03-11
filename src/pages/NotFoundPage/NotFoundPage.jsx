import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
};

export default NotFoundPage;
