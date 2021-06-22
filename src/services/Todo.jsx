import React from "react";

const Todo = ({ todo, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li key={todo.id}>
      {todo.title}
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};

export default Todo;
