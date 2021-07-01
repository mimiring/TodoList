import React from "react";
import AddForm from "../components/AddForm";
import { addRequset } from "../services/request";

const New = ({ history }) => {
  const addTodo = (todo) => {
    return addRequset(todo).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      New
      <AddForm onSave={addTodo} />
    </div>
  );
};

export default New;
