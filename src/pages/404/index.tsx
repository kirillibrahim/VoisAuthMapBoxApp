

import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go back to the home page</a>
    </div>
  );
};

export default NotFoundPage;