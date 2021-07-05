import React from "react";

function ServerError({ history }) {
  const handleBackbtnClick = () => {
    history.push("/");
  };

  return (
    <div className="error_wrap">
      <h1 className="error_code">500</h1>
      <div className="error_message">Server Error</div>
      <div className="backbtn_wrap">
        <button className="backbtn" onClick={handleBackbtnClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ServerError;
