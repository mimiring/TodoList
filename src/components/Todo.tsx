import React from "react";
import { Link } from "react-router-dom";
import { Category, getCategoryEmoji, STATUS } from "../constants";

export type ToDo = {
  title: string;
  status: string;
  category: Category;
  note: string;
  id: number;
};

type TodoProps = {
  todo: ToDo;
  onDelete: (todoId: number) => void;
  onEditClick: (todo: ToDo) => void;
};

const Todo = ({ todo, onDelete, onEditClick }: TodoProps) => {
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
