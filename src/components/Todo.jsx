import React from "react";
import { STATUS } from "../constants";
import "../style.css";

const Todo = ({ todo, onDelete, onEditClick }) => {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    onEditClick(todo);
  };

  return (
    <li class="todo_item" key={todo.id}>
      <div
        class={`todo_icon ${
          todo.status === STATUS.INPROGRESS ? "in_progress" : ""
        } ${todo.status === STATUS.DONE ? "done" : ""}`}
      ></div>
      <span class="todo_item_text">
        {todo.category} | {todo.title}
      </span>
      <button onClick={handleEditClick}>수정</button>
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};

export default Todo;
