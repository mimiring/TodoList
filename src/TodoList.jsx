import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, onDelete, onEditClick }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEditClick={onEditClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
