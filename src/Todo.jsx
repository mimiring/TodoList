import React from "react";

const Todo = ({ todo, onToggle, onDelete, onEditClick }) => {
  const handleToggleClick = () => {
    onToggle(todo.id);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <>
      <li key={todo.id}>
        {todo.title}
        <button onClick={handleToggleClick}>
          {todo.completed ? "했음" : "안했음"}
        </button>
        <button onClick={() => onEditClick(todo)}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </li>
    </>
  );
};

export default Todo;
