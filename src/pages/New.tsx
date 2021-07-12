import React from "react";
import { RouteComponentProps } from "react-router-dom";
import AddForm from "../components/AddForm";
import { ToDo } from "../type";
import { addRequset } from "../services/request";

type NewProps = RouteComponentProps;

const New = ({ history }: NewProps) => {
  const handleBackClick = () => {
    history.push("/");
  };

  const addTodo = (todo: ToDo) => {
    return addRequset(todo)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        history.push("/err");
      });
  };

  return (
    <div>
      <div className="todo_title_wrap">
        <button className="todo_backbtn" onClick={handleBackClick}></button>
        <h3 className="todo_title">New To Do</h3>
      </div>
      <AddForm onSave={addTodo} />
    </div>
  );
};

export default New;
