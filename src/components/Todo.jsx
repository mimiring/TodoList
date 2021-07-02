import React from "react";
import { Link } from "react-router-dom";
import { getCategoryEmoji, STATUS } from "../constants";

const Todo = ({ todo, onDelete, onEditClick }) => {
  const emoji = getCategoryEmoji(todo.category);

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    onEditClick(todo);
  };

  return (
    <li className="todo_item" key={todo.id}>
      <Link to={`/todos/${todo.id}`}>
        <div
          className={`todo_icon ${
            todo.status === STATUS.INPROGRESS ? "in_progress" : ""
          } ${todo.status === STATUS.DONE ? "done" : ""}`}
        ></div>
        <div className="todo_emoji">{emoji}</div>
        <span className="todo_item_text">{todo.title}</span>
      </Link>
      <button onClick={handleEditClick}>수정</button>
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};

export default Todo;
