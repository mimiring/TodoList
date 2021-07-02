import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY, STATUS } from "../constants";

const Todo = ({ todo, onDelete, onEditClick }) => {
  let name = todo.category;
  let emoji = "";
  if (name === CATEGORY.WORK) {
    emoji = "🖥";
  } else if (name === CATEGORY.SELF_DEVELOPMENT) {
    emoji = "🥰";
  } else if (name === CATEGORY.HOBBY) {
    emoji = "❤";
  } else if (name === CATEGORY.HOUSE_WORK) {
    emoji = "🏠";
  } else if (name === CATEGORY.ETC) {
    emoji = "🗒";
  }

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    onEditClick(todo);
  };

  return (
    <li class="todo_item" key={todo.id}>
      <Link to={`/todos/${todo.id}`}>
        <div
          class={`todo_icon ${
            todo.status === STATUS.INPROGRESS ? "in_progress" : ""
          } ${todo.status === STATUS.DONE ? "done" : ""}`}
        ></div>
        <span class="todo_item_text">
          {emoji}
          {todo.title}
        </span>
      </Link>
      <button onClick={handleEditClick}>수정</button>
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};

export default Todo;
