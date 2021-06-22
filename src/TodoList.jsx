import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, onToggle, onDelete }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
