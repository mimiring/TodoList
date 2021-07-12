import React from "react";
import { useDrop } from "react-dnd";
import { DragTargetType, Status } from "../constants";
import { ToDo } from "../type";
import Todo from "./Todo";

type TodoListProps = {
  status: Status;
  todoList: ToDo[];
  message: string;
  onDrop: (todo: ToDo) => Promise<void>;
};

const TodoList = ({ status, todoList, message, onDrop }: TodoListProps) => {
  const [collectedProps, drop] = useDrop<any, any, any>(
    () => ({
      accept: DragTargetType.TODO_ITEM,
      drop: () => ({
        status,
      }),
      collect: (monitor: any) => {
        return {
          isOver: monitor.isOver(),
          canDrop:
            (monitor.getItem()?.status ?? status) !== status &&
            monitor.canDrop(),
        };
      },
    }),
    [todoList, status]
  );

  const isActive = collectedProps.canDrop && collectedProps.isOver;

  return (
    <div ref={drop} style={isActive ? { backgroundColor: "gray" } : {}}>
      {/* <span className="category_item_count">{todoList.length}</span> */}
      {todoList.length === 0 ? (
        <div>{message}</div>
      ) : (
        <ul className="todo_list">
          {todoList.map((todo) => (
            <Todo key={todo.id} todo={todo} onDrop={onDrop} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
