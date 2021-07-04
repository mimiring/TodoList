import React from "react";

function NotFound() {
  return (
    <div>
      <div className="error_wrap">
        <h1 className="error_code">404</h1>
        <div className="error_message">Page Not Found</div>
      </div>
      <button className="backbtn">Back to Home</button>
    </div>
  );
}

export default NotFound;
