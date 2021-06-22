import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, onDelete }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
