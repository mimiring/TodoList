import React from "react";

const Todo = ({ todo, onDelete, onEditClick }) => {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    onEditClick(todo);
  };

  return (
    <>
      <li key={todo.id}>
        {todo.status} | {todo.title}
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </li>
    </>
  );
};

export default Todo;
