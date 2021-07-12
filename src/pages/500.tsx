import React from "react";
import { RouteComponentProps } from "react-router-dom";

type ServerErrorProps = RouteComponentProps;

function ServerError({ history }: ServerErrorProps) {
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
