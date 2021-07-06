import React from "react";
import Todo, { ToDo } from "./Todo";

type TodoListProps = {
  todoList: ToDo[];
  message: string;
};

const TodoList = ({ todoList, message }: TodoListProps) => {
  if (todoList.length === 0) {
    return <div>{message}</div>;
  }
  return (
    <>
      {/* <span className="category_item_count">{todoList.length}</span> */}
      <ul className="todo_list">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
