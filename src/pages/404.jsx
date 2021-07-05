import React from "react";

function NotFound({ history }) {
  const handleBackbtnClick = () => {
    history.push("/");
  };

  return (
    <div className="error_wrap">
      <h1 className="error_code">404</h1>
      <div className="error_message">Page Not Found</div>

      <div className="backbtn_wrap">
        <button className="backbtn" onClick={handleBackbtnClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
