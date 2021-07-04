import React from "react";
import AddForm from "../components/AddForm";
import { addRequset } from "../services/request";

const New = ({ history }) => {
  const handleBackClick = () => {
    history.push("/");
  };

  const addTodo = (todo) => {
    return addRequset(todo).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <div className="todo_title_wrap">
        <button className="todo_backbtn" onClick={handleBackClick}></button>
        <h3 class="todo_title">New To Do</h3>
      </div>
      <AddForm onSave={addTodo} />
    </div>
  );
};

export default New;
