import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, message, onDelete, onEditClick }) => {
  if (todoList.length === 0) {
    return <div>{message}</div>;
  }
  return (
    <>
      {/* <span className="category_item_count">{todoList.length}</span> */}
      <ul className="todo_list">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEditClick={onEditClick}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
