import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, todoStatus, onDelete, onEditClick }) => {
  if (todoList.length === 0) {
    if (todoStatus === "todo") {
      return <div>할 일을 모두 마쳤어요</div>;
    } else if (todoStatus === "in-progress") {
      return <div>진행중인 일을 모두 마쳤어요</div>;
    } else {
      return <div>완료한 일이 아직 없네요</div>;
    }
  }
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
